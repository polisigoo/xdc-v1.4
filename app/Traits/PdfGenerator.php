<?php

namespace App\Traits;

use PDF;

trait PdfGenerator
{
	public function generatePdf($cp, $type) :string
	{
		$data['req'] = $cp;
		$data['cp'] = $cp;
        if ($type === 'card') {
            $path = base_path("storage/".$data['req']->id."-card.pdf");
        	\PDF::loadView('docs.card', $data)->setPaper('a4', 'landscape')->save($path);
        }
        elseif ($type === 'agreement') {
            $path = base_path("storage/".$data['req']->id."-agg.pdf");
        	\PDF::loadView('docs.cpagg', $data)->save($path);
        }

        
        return $path;
	}
}