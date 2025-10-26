import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Navigation from '@/components/Navigation';
import MixedModeContent from '@/components/MixedModeContent'; // Import the new component

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

const MixedMode = ({ title, japaneseWords }: MixedModeProps) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            
            <Navigation />
            
            <MixedModeContent title={title} japaneseWords={japaneseWords} />

            
        </>
    );
};

export default MixedMode;