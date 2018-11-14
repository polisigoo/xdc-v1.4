<?php


namespace App\Http\Controllers\Cp;

use App\Http\Controllers\Controller;

class CpController extends Controller
{
    public function generateId()
    {
        return "R2H-".mt_rand(1000, 9999)."-".mt_rand(1000, 9999);
    }
}