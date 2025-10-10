<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Japanese extends Model
{
    use HasFactory;

    protected $table = 'japanese';

    protected $fillable = [
        'furigana',
        'kanji',
        'english',
        'memorized',
        'katakana',
    ];

    public $timestamps = true;

    /**
     * Relationship: one Japanese word can have many images.
     */
    public function images()
    {
        return $this->hasMany(JapaneseImg::class, 'id', 'id');
    }
}