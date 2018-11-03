<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateContentProvidersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('content_providers', function (Blueprint $table) {
            $table->string('passport');
            $table->string('aadhar_card')->nullable();
            $table->string('pan_card')->nullable();
            $table->string('cancelled_cheque')->nullable();
            $table->string('other_docs')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('content_providers', function (Blueprint $table) {
            $table->dropColumn('passport');
            $table->dropColumn('aadhar_card');
            $table->dropColumn('pan_card');
            $table->dropColumn('cancelled_cheque');
            $table->dropColumn('other_docs');
        });
    }
}
