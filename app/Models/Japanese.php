<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Japanese extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'japanese';

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'id';

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
        'furigana',
        'kanji',
        'english',
        'memorized',
        'katakana',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'memorized' => 'integer',
    ];

    /**
     * The model's default values for attributes.
     *
     * @var array
     */
    protected $attributes = [
        'memorized' => 0,
    ];

    /**
     * Get the image associated with the Japanese word.
     */
    public function image(): HasOne
    {
        return $this->hasOne(JapaneseImg::class, 'id', 'id');
    }

    /**
     * Scope a query to only include memorized words.
     */
    public function scopeMemorized($query)
    {
        return $query->where('memorized', 1);
    }

    /**
     * Scope a query to only include non-memorized words.
     */
    public function scopeNotMemorized($query)
    {
        return $query->where('memorized', 0);
    }

    /**
     * Get the display name for the word.
     * Returns kanji if available, otherwise furigana, otherwise katakana.
     */
    public function getDisplayNameAttribute(): string
    {
        return $this->kanji ?? $this->furigana ?? $this->katakana ?? '';
    }

    /**
     * Check if the word has kanji.
     */
    public function hasKanji(): bool
    {
        return !empty($this->kanji);
    }

    /**
     * Check if the word has furigana.
     */
    public function hasFurigana(): bool
    {
        return !empty($this->furigana);
    }

    /**
     * Mark the word as memorized.
     */
    public function markAsMemorized(): bool
    {
        return $this->update(['memorized' => 1]);
    }

    /**
     * Mark the word as not memorized.
     */
    public function markAsNotMemorized(): bool
    {
        return $this->update(['memorized' => 0]);
    }
}