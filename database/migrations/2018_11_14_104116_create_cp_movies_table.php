<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCpMoviesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cp_movies', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('release_type');
            $table->dateTime('release_date');
            $table->date('release_year');
            $table->string('runtime');
            $table->string('rating_system');
            $table->string('director');
            $table->string('fb_page')->nullable();
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
        Schema::dropIfExists('cp_movies');
    }
}
