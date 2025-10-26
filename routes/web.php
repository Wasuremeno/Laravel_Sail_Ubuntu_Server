<?php
use App\Http\Controllers\MixedModeController;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/test-redis', function () {
    // Correct way using Redis facade
    Redis::set('test_key', 'Hello Redis!');
    $value = Redis::get('test_key');
    
    return response()->json([
        'redis_test' => $value,
        'status' => 'Redis is working!'
    ]);
});


Route::get('/learn-new-words', function () {
    return Inertia::render('LearnNewWords');
})->name('learn.words');

Route::get('/review-words', function () {
    return Inertia::render('ReviewWords');
})->name('review.words');

Route::get('/mixed-mode', [MixedModeController::class, 'index'])->name('mixed-mode');


Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::post('/mark-word/{wordId}/{status}', [MixedModeController::class, 'markWord']);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
