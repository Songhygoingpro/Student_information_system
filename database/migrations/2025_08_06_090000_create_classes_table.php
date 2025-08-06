<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('classes', function (Blueprint $table) {
            $table->id();
            $table->string('room'); // e.g., R3-16
            $table->string('section'); // Morning / Evening / Weekend
            $table->unsignedTinyInteger('year'); // 1..n
            $table->text('description')->nullable();
            $table->timestamps();

            $table->index(['room', 'section']);
            $table->index('year');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('classes');
    }
};
