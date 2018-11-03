<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class CpWelcome extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $req;
    public $password;
    public function __construct($req, $password, $card, $agreement)
    {
        $this->req = $req;
        $this->password = $password;
        $this->card = $card;
        $this->agreement = $agreement;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return  $this->from('info@r2h-live.com')
                ->subject('You are now a Content Provider')
                ->view('mail.cp_welcome')
                ->attach($this->card, [
                        'as' => 'MembershipCard.pdf',
                        'mime' => 'application/pdf',
                    ])
                ->attach($this->agreement, [
                        'as' => 'Agreement.pdf',
                        'mime' => 'application/pdf',
                    ]);
                
    }
}
