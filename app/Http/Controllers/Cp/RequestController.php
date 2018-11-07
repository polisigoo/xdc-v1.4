<?php

namespace App\Http\Controllers\Cp;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\CpRequest;
use App\Admin;
use App\ContentProvider;
use App\Country;
use App\Traits\CpMailer;
use App\Traits\RecaptchaHandler;
use Illuminate\Auth\Events\Registered;
use App\Jobs\SendCpWelcomeEmail;
use App\Jobs\SendCpRequestEmail;

class RequestController extends Controller
{
    use CpMailer, RecaptchaHandler;

    public function index(Request $req)
    {
        $res = $this->testRecaptchaResponse($req->all()['g-recaptcha-response']);
        $cp_req = CpRequest::where('email', $req->email)->first();
    	if (!is_null($cp_req)) {
    		if (is_null($cp_req->is_approved)) {
    			return response()->json(['message'=>'You have already sent your request to become a content provider and it is currently being reviewed'])->setStatusCode(412);
    		}
    		if (!$cp_req->is_approved) {
    			return response()->json(['message'=>"You have already sent your request to become a content provider and it is wasn't accepted"])->setStatusCode(412);
    		}
    		return response()->json(['message'=>'You are already a content provider'])->setStatusCode(412);
    		
    	}
        // dd($request)

        if(!$this->testRecaptchaResponse($req->all()['g-recaptcha-response'])){
            return response()->json(['message'=> 'The ReCaptcha has already been used. Please reload the page to get a new challenge'])->setStatusCode(412);
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
        
        dispatch(new SendCpRequestEmail('james@xaansa.com', $cp_req));

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
    	$cp->password = bcrypt($pass);
        $cp->passport = $cp_req->passport;
        $cp->address1 = $cp_req->address1;
        $cp->address2 = $cp_req->address2;
        $cp->zip_code = $cp_req->zip;
        $cp->country = $cp_req->country;
        $cp->state = $cp_req->state;
        $cp->location = $cp_req->city;
    	$cp->save();

        //Send the welcome Email Job
        dispatch(new SendCpWelcomeEmail($cp, $pass));

    	return response()->json(['message' => 'successful']);
    }

    public function reject($req, $msg){
    	$cp_req = CpRequest::find($req);
    	$cp_req->is_approved = false;
    	$cp_req->save();

    	//Notify Requester
        $this->sendRejectionMail($cp_req->email, [$cp_req, $msg]);
    	return response()->json(['message' => 'successful']);
    }

}
