<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCpLivestreamTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cp_livestream', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('channel_logo');
            $table->string('channel_editor');
            $table->string('fb_page');
            $table->string('content_id')->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cp_livestream');
    }
}
