<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Country;

class CountriesController extends Controller
{
    public function getAll()
    {
    	return response()->json(Country::all());
    }
    public function getStates($id){
    	$country = Country::find($id);
    	return response()->json($country->states);
    }
}
