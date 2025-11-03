<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ImportSqlSeeder extends Seeder
{
    public function run(): void
    {
        $path = database_path('seeders/laravel_anki_docker.sql');
        DB::unprepared(file_get_contents($path));
    }
}