<?php

namespace App\Http\Controllers\Cp;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\CpRequest;
use App\Mail\CpRequest as ReqMail;
use Illuminate\Support\Facades\Mail;
use App\Admin;
use App\Notifications\CpRequest as ReqNot;

class RequestController extends Controller
{
    public function index(Request $req)
    {
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
    	$cp_req->save();

    	//Notify Admin
    	$admin = Admin::first();
    	$admin->notify(new ReqNot($req));
    	Mail::to('anupam@xaansa.com')->send(new ReqMail($cp_req));
    	return response()->json(['message' => 'Your request has been sent successfully.']);
    	
    }
    public function getAllUnresolved(){
    	return response()->json(CpRequest::where('is_approved', null)->get());
    }

    public function accept($req){
    	$cp_req = CpRequest::find($req);
    	$cp_req->is_approved = true;
    	$cp_req->save();
    	return response()->json(['message' => 'successful']);
    }

    public function reject($req){
    	$cp_req = CpRequest::find($req);
    	$cp_req->is_approved = false;
    	$cp_req->save();
    	return response()->json(['message' => 'successful']);
    }
}
