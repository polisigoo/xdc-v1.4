<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    protected $fillable = ['name', 'payment_id', 'braintree_plan', 'quantity', 'trial_ends_at', 'ends_at'];
}
