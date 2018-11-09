<?php

namespace App\Traits;

use App\Mail\CpRequest;
use App\Mail\CpRejection;
use App\Mail\CpWelcome;
use Illuminate\Support\Facades\Mail;

trait CpMailer
{
    /**
     * @param $to
     * @param $data
     */
    public function sendRequestMail($to, $data) : void
	{
		Mail::to($to)->queue(new CpRequest($data));
	}

    /**
     * @param $to
     * @param $data
     */
    public function sendRejectionMail($to, $data) : void
	{
		Mail::to($to)->queue(new CpRejection($data[0], $data[1]));
	}

    /**
     * @param $to
     * @param $data
     */
    public function sendWelcomeMail($to, $data) : void
	{
		Mail::to($to)->queue(new CpWelcome($data[0], $data[1], $data[2], $data[3]));
	}
}