<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('japanese_img', function (Blueprint $table) {
            $table->id('img_ID');
            $table->integer('img_path');
            $table->foreignId('id')->nullable()->constrained('japanese')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('japanese_img');
    }
};