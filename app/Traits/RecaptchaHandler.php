<?php

namespace App\Traits;
use GuzzleHttp\Client;

trait RecaptchaHandler
{
	public function testRecaptchaResponse ($response, $secret="6Lfq8HgUAAAAALCkmSlnXnSnYtQMNvq5PLQlV_ts")
	{
		$client = new Client;
		$res = $client->request('POST', 'https://www.google.com/recaptcha/api/siteverify', [
			'form_params'=> [
				'secret' => $secret,
				'response' => $response,
			]
		]);
		if ($res->getBody()->getContents()) {
			return true;
		}
		return false;
	}
}