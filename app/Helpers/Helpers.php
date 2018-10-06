<?php

namespace App;

use Illuminate\Support\Facades\File;

class Helpers
{

    private $percent;

    /*  Static function to Calculate the percentage
     *
     *  @params $old The old number (Int)
     *  @params $new The new number (Int)
     *  @return Int
     */

    public static function getPercentage($old, $new)
    {
        $percentage = (($new - $old) / $old) * 100;
        return round($percentage, 0) . '%';
    }

    /*  Static function to check if the array is empty or not
     *
     *  @params $array The array
     *  @return array - status code 204 No content
     */

    public static function checkIsEmptyArray($array)
    {
        if (count($array->all()) < 0 || $array->isEmpty()) {
            return true;
        }
        return false;

    }

    /*  Static function to check if there is id exist escpecilly works with first() function
     *
     *  @params $array
     *  @return array - status code 404 No Found
     */

    public static function checkIsEmptyId($id)
    {
        if (is_null($id)) {
            return true;
        }
        return false;

    }

    /**
     * @return mixed
     *
     */
    public static function getIp()
    {
        $ip = file_get_contents('https://api.ipify.org/');;
        $query = json_decode(file_get_contents('https://ipapi.co/' . $ip . '/json'));
        if ($query) {
            $location['country'] = $query->country_name;
            $location['countryCode'] = $query->country;
            $location['city']  = $query->city;
            $location['query'] = $query->ip;
            $location['isp'] = $query->org;
            $location['zip'] = $query->postal === null ? "": $query->postal ;
            return $location;
        }
    }

    public static function checkUserPayment($user)
    {
        // $getSiteInfo = Siteinfo::first()->payment_status;

        // if ($getSiteInfo) {
        //     return true;
        // } else {
        //     if (is_null($user['period_end'])) {
        //         abort(401, 'Unauthorized action.');
        //     } else {
        //         if ($user->period_end < date("Y-m-d")) {
        //             abort(401, 'Unauthorized action.');
        //         }
        //         return true;
        //     }
        // }
         if (!is_null($user->braintree_id)) {
            return true;
        }
        else{
            abort(401, $message = 'Unauthorized action');
        }

    }
}