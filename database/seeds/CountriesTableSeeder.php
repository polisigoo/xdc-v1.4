<?php

use Illuminate\Database\Seeder;
use \GuzzleHttp\Client;
use App\Country;

class CountriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $client = new Client();
        $res = $client->request('GET','https://battuta.medunes.net/api/country/all/?key=d710fc14c915391861c50f46556a575e' );
        $results = json_decode($res->getBody());
        $i = 0;
        foreach ($results as $result) {
        	$count = new Country;
        	$count->name = $result->name;
        	$count->code = $result->code;
        	$count->save();
        }
    }
}
