<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JapaneseSeeder extends Seeder
{
    public function run()
    {
        $japanese = [
            ['id' => 1, 'furigana' => 'あかい', 'kanji' => '赤い', 'english' => 'red', 'memorized' => 1],
            ['id' => 2, 'furigana' => 'なに', 'kanji' => '何', 'english' => 'what', 'memorized' => 1],
            ['id' => 3, 'furigana' => 'いう', 'kanji' => '言う', 'english' => 'to tell', 'memorized' => 0],
            ['id' => 4, 'furigana' => 'みる', 'kanji' => '見る', 'english' => 'to look', 'memorized' => 1],
            ['id' => 5, 'furigana' => 'いく', 'kanji' => '行く', 'english' => 'to go', 'memorized' => 1],
            ['id' => 6, 'furigana' => 'しる', 'kanji' => '知る', 'english' => 'to know', 'memorized' => 1],
            ['id' => 7, 'furigana' => 'くる', 'kanji' => '来る', 'english' => 'to come', 'memorized' => 1],
            ['id' => 8, 'furigana' => 'もつ', 'kanji' => '持つ', 'english' => 'to have', 'memorized' => 1],
            ['id' => 9, 'furigana' => 'でる', 'kanji' => '出る', 'english' => 'to go out, to leave', 'memorized' => 1],
            ['id' => 10, 'furigana' => 'だいじょうぶ', 'kanji' => '大丈夫', 'english' => 'all right, okay', 'memorized' => 1],
            ['id' => 11, 'furigana' => 'もどる', 'kanji' => '戻る', 'english' => 'to return', 'memorized' => 1],
            ['id' => 12, 'furigana' => 'わるい', 'kanji' => '悪い', 'english' => 'bad', 'memorized' => 0],
            ['id' => 13, 'furigana' => null, 'kanji' => null, 'english' => 'power', 'memorized' => 1, 'katakana' => 'パワー'],
        ];

        foreach ($japanese as $word) {
            DB::table('japanese')->updateOrInsert(
                ['id' => $word['id']],
                $word
            );
        }
    }
}