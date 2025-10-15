import React from 'react';
import { Head } from '@inertiajs/react';

interface JapaneseWord {
    id: number;
    furigana: string;
    kanji: string | null;
    english: string;
    memorized: number;
    katakana: string | null;
    display_name: string; // Accessor attribute
    image?: {
        // JapaneseImg relationship data
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
            
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                    {title}
                </h1>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-4">Japanese Words</h2>
                    
                    {/* Words List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {japaneseWords.map((word) => (
                            <div 
                                key={word.id}
                                className={`border rounded-lg p-4 ${
                                    word.memorized ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'
                                }`}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-semibold">
                                        {word.kanji && (
                                            <div className="text-xl text-red-700">{word.kanji}</div>
                                        )}
                                        <div className="text-gray-600 text-sm">
                                            {word.furigana || word.katakana}
                                        </div>
                                    </h3>
                                    <span 
                                        className={`px-2 py-1 rounded text-xs ${
                                            word.memorized 
                                                ? 'bg-green-500 text-white' 
                                                : 'bg-gray-200 text-gray-700'
                                        }`}
                                    >
                                        {word.memorized ? 'Memorized' : 'Learning'}
                                    </span>
                                </div>
                                <p className="text-gray-700">{word.english}</p>
                            </div>
                        ))}
                    </div>

                    {japaneseWords.length === 0 && (
                        <div className="text-center py-8 text-gray-500">
                            No Japanese words found.
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default MixedMode;