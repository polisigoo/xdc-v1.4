<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Traits\FFmpegTranscoding;
use App\Tv;
use App\Video;
use Auth;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Pbmedia\LaravelFFMpeg\FFMpegFacade as FFMpeg;
use Symfony\Component\Process\Process;

class TvController extends Controller
{
    use FFmpegTranscoding;

    public $number = 0;
    public $name;
    public $Watermark = null;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $this->admin = Auth::user()->authorizeRoles(['admin', 'manager']);
            return $next($request);
        });
    }

    /**
     *  Gel all channels
     *
     * @return []
     */
    public function getAllChannels()
    {
        $getChannels = Tv::get();

        if ($getChannels->isEmpty()) {
            $getChannels = null;
        }

        return response()->json(
            ['status' => 'success',
                'data' => [
                    'channels' => $getChannels,
                ]]
        );
    }

    /**
     * Create new channel
     *
     * @param Request $request
     * @return []
     */

    public function createChannelDetails(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpg,png,jpeg',
            'name' => 'required|string|max:30',
            'resolution' => 'max:5',
            'transcoding' => 'required|boolean'
        ]);

        // Change image size and upload it to local Storage
        $logoName = str_random(20) . '.png';
        $image_encode = \Image::make($request->file('image'))->widen(600)->encode('png');
        Storage::disk('public')->put('posters/' . $logoName, $image_encode->__toString());

        $store = new Tv();
        $store->name = $request->name;
        $store->genre = $request->genre;
        $store->image = $logoName;
        if ($request->transcoding) {$store->streaming_name = str_random(12) . '.m3u8';}
        $store->streaming_url = $request->iptv_url;
        $store->streaming_resolutions = $request->resolution;
        $store->streaming_transcoding = $request->transcoding;
        $store->save();

        // Create New Folder
        Storage::makeDirectory('/public/iptv/' . $store->id);

        return response()->json(['status' => 'success', 'message' => 'Successful store channel details in database', 'id' => $store->id], 200);
    }

    /**
     * Delete channel
     *
     * @param [uuid] $id
     * @return []
     */
    public function deleteChannel($id)
    {
        $delete = Tv::find($id);
        if (is_null($delete)) {
            return response()->json(['status' => 'failed', 'message' => 'There is no id'], 422);
        }

        // Kill FFmpeg if is runniung
        if ($delete->streaming_status) {
            $process = new Process('kill ' . $delete->streaming_pid);
            $process->run();
        }


        $delete->delete();
        return response()->json(['status' => 'success', 'message' => 'Successful delete']);
    }

    /**
     * Get Channel Details
     *
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function getChannelDetails($id)
    {

        $check = DB::table('tvs')
            ->where('tvs.id', $id)
            ->first();

        // Abort if null
        if (is_null($check)) {
            abort(404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $check,
        ]);
    }

    /**
     * Update Channel
     *
     * @param Request $request
     */

    public function updateChannel(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:30',
            'iptv_url' => 'required|url',
            'genre' => 'required|string|max:20',
            'resolution' => 'integer|max:4000',
            'transcoding' => 'required|max:30',
        ]);

        $check = Tv::find($request->id);

        // Abort if null
        if (is_null($check)) {
            abort(404);
        }

        $check->name = $request->name;
        $check->genre = $request->genre;
        $check->streaming_resolutions = $request->resolution;
        $check->streaming_transcoding = $request->transcoding;
        $check->streaming_url = $request->iptv_url;

        if (!empty($request->file('image'))) {
            $logoName = str_random(20) . '.png';
            $image_encode = \Image::make($request->file('image'))->widen(600)->encode('png');
            Storage::disk('public')->put('posters/' . $logoName, $image_encode->__toString());
            $check->image = $logoName;
        }

        $check->save();


        return response()->json(['status' => 'success', 'message' => 'Successful update ' . $request->name]);
    }

    /**
     * This function to start or stop streaming channel via FFmpeg
     *
     * @param [type] $id
     * @return void
     */
    public function startStreaming($id)
    {

        $check = Tv::find($id);
        // Abort if null
        if (is_null($check)) {
            abort(404);
        }

        // If transcoding by FFmpeg
        if ($check->streaming_transcoding) {

            if (!$check->streaming_status) {
                $transcode = $this->transcodingToLiveHLS($check->streaming_resolutions, $check->streaming_url, $check->id, $check->streaming_name);
                return response()->json(['status' => 'success', 'streaming_status' => 1, 'message' => 'Successful Start Streaming']);

            } else {
                // Store Pid
                $check->streaming_status = 0;
                $check->streaming_pid = null;
                $check->save();

                $process = new Process('kill -9 ' . $check->streaming_pid);
                $process->run();
                // executes after the command finishes
                if ($process->isSuccessful()) {
                    return response()->json(['status' => 'success', 'streaming_status' => 0, 'message' => 'Successful Stop Streaming']);
                } else {
                    return response()->json(['status' => 'success', 'streaming_status' => 0, 'message' => 'Streaming Already Closed']);

                }
            }

            // Without FFmpegTranscoding
        } else {
            if (!$check->streaming_status) {
                // Store Pid
                $check->streaming_status = 1;
                $check->save();
                return response()->json(['status' => 'success', 'streaming_status' => 1, 'message' => 'Successful Start Streaming']);

            } else {
                // Store Pid
                $check->streaming_status = 0;
                $check->save();
                return response()->json(['status' => 'success', 'streaming_status' => 0, 'message' => 'Successful Stop Streaming']);
            }
        }
    }
}