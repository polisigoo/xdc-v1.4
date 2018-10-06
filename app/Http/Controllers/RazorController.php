<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Razorpay\Api\Api;
use Carbon\Carbon;

class RazorController extends Controller
{
    public $razor;

    function __construct(){
    	$this->razor = new Api('rzp_test_YzGS3LWMMVCO5S', 'zr8lhqKK1d6M9gUXiDtSx1NG');
    }
    public function index(){
    	$plans = $this->razor->plan->all();
    	var_dump(json_decode(json_encode($plans->toArray()['items'][0])));
    }

    public function createSubscription(Request $request){
    	$subscription  = $this->razor->subscription->create(array('plan_id' => $request->plan, 'customer_notify' => 1, 'total_count' => 1, 'start_at' => Carbon::now()->addDays(7)->timestamp));
    	return response()->json([
    		'status'	=>	'success',
    		'data'	=>	$subscription->toArray(),
    	]);
    }
}
