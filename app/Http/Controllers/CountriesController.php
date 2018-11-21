<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Country;
use PHPUnit\Framework\Constraint\Count;

class CountriesController extends Controller
{
    public function getAll()
    {
    	return response()->json(Country::all());
    }
    public function getStates($id){
        if(is_numeric($id))
    	    $country = Country::find($id);
        if (is_string($id))
            $country = Country::where('name', $id)->first();
    	return response()->json($country->states);
    }
}
