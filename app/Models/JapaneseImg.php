<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class JapaneseImg extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'japanese_img';

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'img_ID';

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = true;

    /**
     * The data type of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'int';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'img_path',
        'id',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'img_path' => 'integer',
        'id' => 'integer',
    ];

    /**
     * Get the Japanese word that owns the image.
     */
    public function japanese(): BelongsTo
    {
        return $this->belongsTo(Japanese::class, 'id', 'id');
    }

    /**
     * Get the full image path.
     * You can customize this based on your storage structure.
     */
    public function getFullImagePathAttribute(): string
    {
        // Adjust this based on how you store images
        return 'images/japanese/' . $this->img_path . '.jpg';
    }

    /**
     * Get image URL for web display.
     */
    public function getImageUrlAttribute(): string
    {
        return asset('storage/' . $this->full_image_path);
    }
}