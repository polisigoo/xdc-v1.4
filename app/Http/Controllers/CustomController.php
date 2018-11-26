<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Session;
use GuzzleHttp\Client;


class CustomController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $http = new Client();
            $response = $http->post( env('APP_URL').'/oauth/token', [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => '2',
                    'client_secret' => env('CLIENT_SECRET'),
                    'username' => $request->email,
                    'password' => $request->password,
                    'scope' => '',
                ],
            ]);
            $tokens = json_decode((string) $response->getBody(), true);
            return response()->json([
                'user'  => Auth::user(),
                'tokens'  =>    $tokens,
            ]);
        }
        else{
        	return response()->json(
        		['error'=>'Incorrect email or password']
        	);
        }
    }
}
