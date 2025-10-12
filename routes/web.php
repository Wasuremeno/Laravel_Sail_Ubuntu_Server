<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/learn-new-words', [LearnWordsController::class, 'show'])->name('learn.words');

// routes/web.php
Route::get('/learn-new-words', function () {
    return Inertia::render('LearnNewWords');
})->name('learn.words');


Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
