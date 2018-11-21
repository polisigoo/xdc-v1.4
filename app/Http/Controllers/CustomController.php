<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Session;


class CustomController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication passed...
            return response()->json([
                    'user'  => Auth::user(),
                    'session'=> $request->session()->token(),
                ]);
        }
        else{
        	return response()->json(
        		['error'=>'Incorrect email or password']
        	);
        }
    }
}
