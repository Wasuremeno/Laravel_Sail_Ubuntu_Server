<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JapaneseImg extends Model
{
    use HasFactory;

    protected $table = 'japanese_img';

    protected $primaryKey = 'img_ID';

    protected $fillable = [
        'img_path',
        'id',
    ];

    public $timestamps = true;

    /**
     * Relationship: each image belongs to one Japanese word.
     */
    public function japanese()
    {
        return $this->belongsTo(Japanese::class, 'id', 'id');
    }
}