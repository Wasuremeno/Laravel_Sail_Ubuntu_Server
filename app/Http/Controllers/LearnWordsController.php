<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class LearnWordsController extends Controller
{
    public function show()
    {
        $words = [
            [
                'id' => 1,
                'word' => 'Ephemeral',
                'meaning' => 'Lasting for a very short time',
                'example' => 'The ephemeral beauty of cherry blossoms'
            ],
            [
                'id' => 2,
                'word' => 'Serendipity',
                'meaning' => 'The occurrence of fortunate discoveries by accident',
                'example' => 'Finding this book was pure serendipity'
            ],
            [
                'id' => 3,
                'word' => 'Resilient',
                'meaning' => 'Able to recover quickly from difficult conditions',
                'example' => 'She showed a resilient spirit during hard times'
            ],
            [
                'id' => 4,
                'word' => 'Ubiquitous',
                'meaning' => 'Present, appearing, or found everywhere',
                'example' => 'Mobile phones are now ubiquitous in modern society'
            ],
            [
                'id' => 5,
                'word' => 'Meticulous',
                'meaning' => 'Showing great attention to detail; very careful and precise',
                'example' => 'She was meticulous in her research'
            ]
        ];

        return Inertia::render('LearnNewWords', [
            'title' => 'Learn New Words',
            'words' => $words,
            'totalWords' => count($words)
        ]);
    }
}