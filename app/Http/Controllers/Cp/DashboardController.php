<?php

namespace App\Http\Controllers\Cp;

use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Http\Request;
use App\Traits\Cp\Auth as Auther;

/**
 * 
 */
class DashboardController extends Controller
{
	use Auther;
	function __construct()
	{
		$this->middleware('auth:cp');
	}

	public function home(){
	    $data['title'] = "Dashboard";
        return view('cp.dashboard', $data);
	}
	public function setting(Request $request){
	    $data['title'] = "Settings";
	    return view('cp.pages.settings', $data);
    }
}