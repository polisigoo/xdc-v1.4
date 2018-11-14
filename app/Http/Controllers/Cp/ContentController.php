<?php


namespace App\Http\Controllers\Cp;

use App\CpContent;
use App\CpLivestream;
use App\CpMovies;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Traits\Cp\Controller as CpControl;

class ContentController extends  CpController
{
    use CpControl;
    function __construct()
    {
    }

    public function create(Request $request)
    {
        $success = false;
        DB::beginTransaction();
        $content = new CpContent();
        $content->id = $this->generateId();
        $content->type = $request->type;
        $content->name = $request->name;
        $content->genres = implode(', ', $request->genres) ;
        $content->overview = $request->overview;
        $content->save();
        if ($request->type === "movie"){
            $movie = new CpMovies();
            $movie->content_id = $content->id();
            $movie->release_type = $request->release_type;
            $movie->release_date = $request->release_date;
            $movie->release_year = $request->release->year;
            $movie->runtime      = $request->runtime;
            $movie->rating_system = $request->rating_system;
            $movie->director     = $request->director;
            $movie->fb_page      = $request->fb_page ?? null;
            $movie->save();
            if ($movie) $success = true;
        }
        elseif ($request->type === "tv"){
            $stream = new CpLivestream();
            $stream->content_id = $content->id;
            $stream->channel_logo = $request->channel_logo;
            $stream->editor     = $request->director;
            $stream->fb_page    = $request->pb_page;
            $stream->save();
            if ($stream) $success = true;
        }

        if ($content && $success){
            DB::commit();
            return response()->json([
                'message'   =>  'Content created successfully',
            ])->setStatusCode(201);
        }else{
            DB::rollBack();
            return response()->json([
                'message'   =>  'An error occurred while creating your content',
            ])->setStatusCode('403');
        }
    }

    public function update(Request $request)
    {
        $content = CpContent::find($request->content_id);
        if (is_null($content)){
            return response()->json([
                'message'   =>  'Content not found',
            ])->setStatusCode(403);
        }
//        $otherContent = $content->movie ?? $content->livestream;

//        $this->updateContent($content, $otherContent);

    }
}