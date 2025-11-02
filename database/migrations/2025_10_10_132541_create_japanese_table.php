<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('japanese', function (Blueprint $table) {
            $table->id();
            $table->string('furigana')->nullable();
            $table->string('kanji')->nullable();
            $table->string('english')->nullable();
            $table->integer('memorized')->default(0);
            $table->string('katakana')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('japanese');
    }
};