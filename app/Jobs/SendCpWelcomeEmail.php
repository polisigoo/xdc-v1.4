<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Traits\CpMailer;
use App\Traits\PdfGenerator;

class SendCpWelcomeEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, CpMailer,PdfGenerator ;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public $cp;
    public $card;
    public $agreement;
    public $password;

    public function __construct($cp, $password)
    {
        $this->cp = $cp;
        $this->password = $password;
        // $this->card = $card;
        // $this->pass
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // dd('james');
        $this->card = $this->generatePdf($this->cp, 'card');
        $this->agreement = $this->generatePdf($this->cp, 'agreement');
        // dd('james');
        echo $this->password;
        // $this->aggrement = $this->generateAgreementPdf($cp);
        $this->sendWelcomeMail($this->cp->email, [$this->cp, $this->password, $this->card, $this->agreement]);
    }
}
