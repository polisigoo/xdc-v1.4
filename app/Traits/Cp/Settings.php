<?php

namespace App\Traits\Cp;
use Auth;
use Illuminate\Http\Request;

trait Settings
{
    public function update(Request $request)
    {
       $user = Auth::guard('cp')->user();
       if (!is_null($request->name)){
           $name = explode(" ", $request->name);
           if (count($name) !== 2){
               return response()->json([
                   'message'    =>  'Incorrect name format: Only two names are required ',
               ])->setStatusCode(403);
           }
           $user->first_name = $name[0];
           $user->last_name = $name[1];
       }
       if (!is_null($request->email)){
           $user->email = $request->email;
       }
       if (!is_null($request->mobile)){
           $user->mobile_number = $request->mobile;
       }
       if (!is_null($request->password)){
           $user->password = bcrypt($request->password);
       }
       $user->save();
       return response()->json([
           'message'    =>  'Updated Successfully',
       ])->setStatusCode(201);
    }
}