<?php


namespace App\Http\Controllers\Cp;

use Auth;
use App\Http\Controllers\Controller;
use App\Traits\Cp\Settings;

class SettingsController extends  Controller
{
    use Settings;
    function __construct()
    {
        $this->middleware('auth:cp');
    }

}