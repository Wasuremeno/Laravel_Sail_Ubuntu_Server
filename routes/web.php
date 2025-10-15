<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/learn-new-words', function () {
    return Inertia::render('LearnNewWords');
})->name('learn.words');

Route::get('/review-words', function () {
    return Inertia::render('ReviewWords');
})->name('review.words');


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
