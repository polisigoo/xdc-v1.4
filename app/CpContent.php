<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CpContent extends Model
{
    public function provider()
    {
        return $this->belongsTo('App\ContentProvider', 'cp_id');
    }

    public function movie()
    {
        return $this->hasOne('App\CpMovies', 'content_id');
    }

    public function livestream()
    {
        return $this->hasOne('App\CpLivestream', 'content_id');
    }
}
