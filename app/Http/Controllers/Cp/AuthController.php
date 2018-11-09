<?php

namespace App\Http\Controllers\Cp;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
/**
 * 
 */
class AuthController extends Controller
{
	use AuthenticatesUsers;
	function __construct()
	{
		# code...
	}

	protected $redirectTo = '/';
   
    public function guard(){
    	return Auth::guard('cp');
    }

    public function showLoginForm()
    {
        return view('cp.auth.login');
    }

    // public function login(Request $request)
    // {
    // 	$credentials = $request->only('email', 'password');

    //     if (Auth::attempt($credentials)) {
    //         // Authentication passed...
    //         return redirect()->intended('/');
    //     }
    //     else{
    //     	return $request->email;
    //     }

    // }

}