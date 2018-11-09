<?php

namespace App\Http\Controllers\Cp;

use App\Http\Controllers\Controller;
use Auth;
use App\ContentProvider;
/**
 * 
 */
class DashboardController extends Controller
{
	
	function __construct()
	{
		$this->middleware('auth:cp');
	}

	public function home(){

		return Auth::user();
	}
}