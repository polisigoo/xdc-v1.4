<?php

namespace App\Http\Controllers\Cp;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\CpRequest;
use App\Mail\CpRequest as ReqMail;
use App\Mail\CpRejection;
use App\Mail\CpWelcome;
use Illuminate\Support\Facades\Mail;
use App\Admin;
use App\Notifications\CpRequest as ReqNot;
use App\ContentProvider;
use App\Country;

class RequestController extends Controller
{
    public function index(Request $req)
    {
        // if ($req->hasFile('passport')) {
        //     return 
        // }
    	$cp_req = CpRequest::where('email', $req->email)->first();
    	if ($cp_req != null) {
    		if ($cp_req->is_approved === null) {
    			return response()->json(['message'=>'You have already sent your request to become a content provider and it is currently being reviewed']);
    		}
    		if ($cp_req->is_approved === false) {
    			return response()->json(['message'=>"You have already sent your request to become a content provider and it is wasn't accepted"]);
    		}
    		return response()->json(['message'=>'You are already a content provider']);
    		
    	}
        
    	$cp_req = new CpRequest;
    	$cp_req->first_name = $req->first_name;
    	$cp_req->last_name = $req->last_name;
    	$cp_req->email = $req->email;
    	$cp_req->mobile_number = $req->phone;
    	$cp_req->company_name = $req->company;
    	$cp_req->content_types = implode(', ', $req->content_type);
        $cp_req->address1 = $req->address1;
        $cp_req->address2 = $req->address2;
        $cp_req->country = Country::find($req->country)->name;
        $cp_req->state = $req->state;
        $cp_req->city = $req->city;
        $cp_req->zip = $req->zip;
        $cp_req->passport = substr($req->file('passport')->store('public/passports'), 7);
    	$cp_req->save();

    	//Notify Admin
    	$admin = Admin::first();
    	$admin->notify(new ReqNot($req));
    	Mail::to('james@xaansa.com')->send(new ReqMail($cp_req));
    	return response()->json(['message' => 'Your request has been sent successfully.']);
    	
    }
    public function getAllUnresolved(){
    	return response()->json(CpRequest::where('is_approved', null)->get());
    }

    public function accept($req){
    	$cp_req = CpRequest::find($req);
    	$cp_req->is_approved = true;
    	$cp_req->save();


        
        $pass = str_random(7);
    	//Become a CP
    	$cp = new ContentProvider;
    	$cp->id = "R2H-".mt_rand(1000, 9999)."-".mt_rand(1000, 9999);
    	$cp->first_name = $cp_req->first_name;
    	$cp->last_name = $cp_req->last_name;
    	$cp->email = $cp_req->email;
    	$cp->mobile_number = $cp_req->mobile_number;
    	$cp->company_name = $cp_req->company_name;
    	$cp->password = $pass;
        $cp->passport = $cp_req->passport;
        $cp->address1 = $cp_req->address1;
        $cp->address2 = $cp_req->address2;
        $cp->zip_code = $cp_req->zip;
        $cp->country = $cp_req->country;
        $cp->state = $cp_req->state;
        $cp->location = $cp_req->city;
    	$cp->save();

        //Generate pdfs
        $pdf = $this->genCardPdf($cp);
        $agg = $this->genAgreementPdf($cp);

        //Notify Requester
        Mail::to($cp_req->email)->send(new CpWelcome($cp_req, $pass,$pdf, $agg));

    	return response()->json(['message' => 'successful']);
    }

    public function reject($req, $msg){
    	$cp_req = CpRequest::find($req);
    	$cp_req->is_approved = false;
    	$cp_req->save();

    	//Notify Requester
    	Mail::to($cp_req->email)->send(new CpRejection($cp_req, $msg));
    	return response()->json(['message' => 'successful']);
    }

    public function genCardPdf($req)
    {
        $data['req'] = $req;
        $path = "storage/".$data['req']->id.".pdf";
        \PDF::loadView('docs.card', $data)->setPaper('a4', 'landscape')->setWarnings(false)->save($path);
        return $path;
    }

    public function genAgreementPdf($req){
        $data['cp'] = $req;
        $path = "storage/".$data['cp']->id."-agreement.pdf";
        \PDF::loadView('docs.cpagreement', $data)->setWarnings(false)->save($path);
        return $path;
    }

    public function test()
    {
        // $cps = ContentProvider::all();
        $data['cp'] = ContentProvider::where('email', 'jude@gmail.com')->first();
        $pdf =  \PDF::loadView('docs.cpagg', $data);
        return $pdf->download('invoice.pdf');

    }
}
