<?php

namespace App\Http\Controllers;

use App\Models\Japanese;
use Inertia\Inertia;

class MixedModeController extends Controller
{
    public function index()
    {
        $japaneseWords = Japanese::with('image')->get();

        return Inertia::render('MixedMode', [
            'title' => 'Mixed Mode',
            'japaneseWords' => $japaneseWords,
        ]);
    }
}