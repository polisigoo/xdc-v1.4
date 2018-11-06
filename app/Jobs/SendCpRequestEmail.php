<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Traits\CpMailer;

class SendCpRequestEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, CpMailer;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    protected $to;
    protected $req;
    public function __construct($to, $req)
    {
        $this->to = $to;
        $this->req = $req;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $this->sendRequestMail($this->to, $this->req);
    }
}
