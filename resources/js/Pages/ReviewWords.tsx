import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import ThemeToggle from '@/components/ThemeToggle';
import ReviewModeContent from '@/components/ReviewModeContent'; 
import Navigation from '@/components/Navigation';

interface JapaneseWord {
    id: number;
    furigana: string;
    kanji: string | null;
    english: string;
    memorized: number;
    katakana: string | null;
    display_name: string;
    image?: {
        img_ID: number;
        img_path: string;
        id: number;
    };
}

interface MixedModeProps {
    title: string;
    japaneseWords: JapaneseWord[];
}


const ReviewWords = ({ title, japaneseWords }: MixedModeProps) => {
    return (
        <>
            <Head title="Review words" />
            <Navigation />
            {/* Add the theme toggle button */}
            <ThemeToggle />
            <ReviewModeContent title={title} japaneseWords={japaneseWords} />
            

        </>
    );
}

export default ReviewWords;