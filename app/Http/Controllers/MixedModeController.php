<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Redis;
use App\Models\Japanese;
use Inertia\Inertia;

class MixedModeController extends Controller
{
    public function index()
    {
        // Try to get words from Redis cache first
        $redisKey = 'japanese_words_with_images';
        $cachedWords = Redis::get($redisKey);

        if ($cachedWords) {
            // Use cached data with proper encoding handling
            $japaneseWords = $this->decodeJapaneseData($cachedWords);
            \Log::info('Loaded words from Redis cache');
        } else {
            // Fetch from database and cache with proper encoding
            $japaneseWords = Japanese::with('image')->get()->toArray();
            
            // Store in Redis with proper encoding
            $this->encodeAndStoreJapaneseData($redisKey, $japaneseWords);
            \Log::info('Loaded words from database and cached in Redis');
        }

        $learnedWordsCount = Japanese::where('memorized', 1)->count();

        return Inertia::render('MixedMode', [
            'title' => 'Mixed Mode',
            'japaneseWords' => $japaneseWords,
            'learnedWordsCount' => $learnedWordsCount,
        ]);
    }

    /**
     * Encode Japanese data with proper Unicode handling
     */
    private function encodeAndStoreJapaneseData($key, $data)
    {
        // Try with Unicode preservation first
        $jsonData = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_IGNORE);
        
        if (json_last_error() !== JSON_ERROR_NONE) {
            \Log::warning('JSON Unicode encoding failed, trying regular encoding');
            // Fallback to regular encoding
            $jsonData = json_encode($data, JSON_INVALID_UTF8_IGNORE);
        }
        
        if (json_last_error() !== JSON_ERROR_NONE) {
            \Log::error('JSON encoding failed: ' . json_last_error_msg());
            throw new \Exception('Failed to encode Japanese data for Redis');
        }
        
        // Store in Redis for 1 hour
        Redis::setex($key, 3600, $jsonData);
    }

    /**
     * Decode Japanese data with proper encoding handling
     */
    private function decodeJapaneseData($cachedData)
    {
        $decoded = json_decode($cachedData, true);
        
        if (json_last_error() !== JSON_ERROR_NONE) {
            \Log::error('JSON decoding error: ' . json_last_error_msg());
            // Try to fix encoding issues
            $fixedData = mb_convert_encoding($cachedData, 'UTF-8', 'UTF-8');
            $decoded = json_decode($fixedData, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Failed to decode Japanese data from Redis');
            }
        }
        
        return $decoded;
    }

    public function markWord($wordId, $status)
    {
        // Update word status in database
        $word = Japanese::find($wordId);
        if ($word) {
            $word->memorized = $status === 'familiar' ? 1 : 0;
            $word->save();

            // Clear the cache to reflect the changes
            Redis::del('japanese_words_with_images');
            \Log::info("Word {$wordId} marked as {$status}, cache cleared");
            
            return response()->json(['success' => true]);
        }

        return response()->json(['success' => false], 404);
    }
}