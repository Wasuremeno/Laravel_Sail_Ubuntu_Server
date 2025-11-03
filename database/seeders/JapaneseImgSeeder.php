<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JapaneseImgSeeder extends Seeder
{
    public function run()
    {
        $images = [
            ['img_ID' => 1, 'img_path' => 1, 'id' => 1],
            ['img_ID' => 2, 'img_path' => 2, 'id' => 2],
            ['img_ID' => 3, 'img_path' => 3, 'id' => 3],
            ['img_ID' => 4, 'img_path' => 4, 'id' => 4],
            ['img_ID' => 5, 'img_path' => 5, 'id' => 5],
            ['img_ID' => 6, 'img_path' => 6, 'id' => 6],
            ['img_ID' => 7, 'img_path' => 7, 'id' => 7],
            ['img_ID' => 8, 'img_path' => 8, 'id' => 8],
            ['img_ID' => 9, 'img_path' => 9, 'id' => 9],
            ['img_ID' => 10, 'img_path' => 10, 'id' => 10],
            ['img_ID' => 11, 'img_path' => 11, 'id' => 11],
            ['img_ID' => 12, 'img_path' => 12, 'id' => 12],
            ['img_ID' => 13, 'img_path' => 13, 'id' => 13],
            
        ];

        foreach ($images as $image) {
            DB::table('japanese_img')->updateOrInsert(
                ['img_ID' => $image['img_ID']],
                $image
            );
        }
    }
}