<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('traffic_incidents', function (Blueprint $table) {
            $table->id('incident_id');
            $table->unsignedBigInteger('reported_by');
            $table->foreign('reported_by')->references('user_id')->on('users');
            $table->unsignedBigInteger('location_id');
            $table->foreign('location_id')->references('location_id')->on('locations');
            $table->string('incident_type');
            $table->string('severity');
            $table->string('status')->default('Active');
            $table->text('description');
            $table->timestamp('reported_at');
            $table->timestamps();

        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('traffic_incidents');
    }
};
