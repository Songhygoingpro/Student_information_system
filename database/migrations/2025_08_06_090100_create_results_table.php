<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('results', function (Blueprint $table) {
            $table->id();

            // Relations
            $table->foreignId('class_id')->constrained(table: 'classes')->cascadeOnDelete();
            $table->foreignId('student_id')->constrained(table: 'users')->cascadeOnDelete();

            // Semester within the year (1 or 2)
            $table->unsignedTinyInteger('semester')->default(1);

            // Scores (0-100)
            $table->unsignedSmallInteger('english')->default(0);
            $table->unsignedSmallInteger('graphic_design')->default(0);
            $table->unsignedSmallInteger('network')->default(0);
            $table->unsignedSmallInteger('java')->default(0);
            $table->unsignedSmallInteger('php')->default(0);

            // Aggregate and status
            $table->unsignedSmallInteger('total')->default(0);
            $table->enum('status', ['Pass', 'Fail'])->default('Pass');

            $table->timestamps();

            $table->index(['class_id', 'semester']);
            $table->index(['student_id', 'class_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('results');
    }
};
