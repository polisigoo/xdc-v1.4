<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Traits\PdfGenerator;

class GenerateAgreementPdf implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, PdfGenerator;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public $cp;

    public function __construct($cp)
    {
        $this->cp = $cp;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $path = $this->generatePdf($this->cp, 'card');
        // dd($path); 
    }
}
