<?php

use Illuminate\Database\Seeder;
use \GuzzleHttp\Client;
use App\Country;
use App\State;

class StateTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$i = 0;
        foreach (Country::all() as $country) {

        	$client = new Client();
	        $res = $client->request('GET','https://battuta.medunes.net/api/region/'.$country->code.'/all/?key=d710fc14c915391861c50f46556a575e' );
	        $results = json_decode($res->getBody());
	        $y = 0;
	        ++$i;
	        foreach ($results as $result) {
	        	$state = new State;
	        	$state->country_id = $country->id;
	        	$state->name = $result->region;
	        	$state->save();
	        	echo "Country : " .$i . " State : " .++$y ."\n";
	        }
        }
    }
}
