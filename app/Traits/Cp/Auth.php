<?php

namespace App\Traits\Cp;

use Illuminate\Support\Facades\Auth as MAuth;


trait Auth
{
    /**
     * @return \Illuminate\Support\Facades\Auth
     */
    public  function getUser()
    {
        return response()->json([
            'user'  =>  MAuth::guard('cp')->user(),
        ]);
    }
}