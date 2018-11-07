<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class ContentProvider extends Authenticatable
{
    use Notifiable;

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;
    protected $fillable = [
    	'first_name', 'last_name', 'email', 'mobile_number', 'alt_mobile_number', 'company_name', 'address1', 'address2', 'address3', 'location', 'zip_code', 'state', 'country',
    ];

    protected $hidden = [
        'password',
    ];
    
}
