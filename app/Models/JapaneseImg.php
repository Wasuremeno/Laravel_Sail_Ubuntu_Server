<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class JapaneseImg extends Model
{
    use HasFactory;

    protected $table = 'japanese_img';
    protected $primaryKey = 'img_ID';
    public $incrementing = true;
    protected $keyType = 'int';

    protected $fillable = [
        'img_path',
        'id',
    ];

    protected $casts = [
        'img_path' => 'string',
        'id' => 'integer',
    ];

    /**
     * Get the Japanese word that owns the image.
     */
    public function japanese(): BelongsTo
    {
        return $this->belongsTo(Japanese::class, 'id', 'id');
    }
}