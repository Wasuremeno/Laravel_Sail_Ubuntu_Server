// components/MixedModeContent.tsx
import React, { useEffect, useState } from 'react';
import { router } from '@inertiajs/react';
import ThemeToggle from '@/components/ThemeToggle';

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

interface MixedModeContentProps {
    title: string;
    japaneseWords: JapaneseWord[];
}

const MixedModeContent = ({ title, japaneseWords }: MixedModeContentProps) => {
    const [activeButton, setActiveButton] = useState<'familiar' | 'unfamiliar' | null>(null);
    const [randomWord, setRandomWord] = useState<JapaneseWord | null>(null);

    // Reset active button state on component mount (after reload)
    useEffect(() => {
        setActiveButton(null);
        
        // Get random word
        if (japaneseWords.length > 0) {
            const randomIndex = Math.floor(Math.random() * japaneseWords.length);
            setRandomWord(japaneseWords[randomIndex]);
        }
    }, [japaneseWords]);

    const handleFamiliar = (event: React.MouseEvent) => {
        console.log("Familiar action triggered");
        setActiveButton('familiar');
        
        setTimeout(() => {
            router.reload();
        }, 1000);
    };

    const handleUnfamiliar = (event: React.MouseEvent) => {
        console.log("Unfamiliar action triggered");
        setActiveButton('unfamiliar');
        
        setTimeout(() => {
            router.reload();
        }, 1000);
    };

    // Keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const key = event.key.toLowerCase();
            
            if (key === 'f') {
                event.preventDefault();
                console.log("F key pressed");
                // Trigger familiar action
                setActiveButton('familiar');
                setTimeout(() => router.reload(), 1000);
            } else if (key === 'j') {
                event.preventDefault();
                console.log("J key pressed");
                // Trigger unfamiliar action
                setActiveButton('unfamiliar');
                setTimeout(() => router.reload(), 1000);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // If no words available
    if (!randomWord) {
        return (
            <div className="container flex justify-center mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-red-900 mb-6">
                    {title}
                </h1>
                <div className="dark:bg-[#212121] bg-white rounded-[18px] shadow-md p-6 text-center">
                    <p className="text-white text-lg">No words available</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container flex justify-center mx-auto px-4 py-8 pt-10">
            <div className="dark:bg-[#212121] bg-white w-[75vw] md:w-[45vw] rounded-[18px] shadow-md">
                
                {/* Single random word card */}
                <div className="max-w-md mx-auto rounded-lg p-6 ">
                    {/* Image */}
                    {randomWord.image && (
                        <div className="mb-4 flex justify-left [caret-color:transparent]">
                            <img 
                                src={`/images/japanese/${randomWord.image.img_path}.png`}
                                alt={randomWord.english}
                                className="w-auto h-[150px] object-cover rounded-lg"
                            />
                        </div>
                    )}

                    {/* English translation */}
                    <div className="">
                        <p className="text-white text-xl font-semibold">{randomWord.english}</p>
                    </div>
                    
                    {/* Word details */}
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-semibold">
                            <div className={`text-lg text-center ${
                                randomWord.katakana ? 'text-green-500' : 'text-amber-500'
                            }`}>
                                {randomWord.furigana || randomWord.katakana}
                            </div>
                                {randomWord.kanji && (
                                    <div className="text-2xl text-rose-500 text-center mb-2">{randomWord.kanji}</div>
                                )}
                        </h3>
                    </div>
                </div>

                {/* Buttons with state-based active classes */}
                <div className="text-center mt-6">
                    <div className="flex">
                        <button 
                            data-action="familiar"
                            onClick={handleFamiliar}
                            className={`familiar-button rounded-bl-[18px] cursor-pointer select-none bg-transparent text-[#c0c0c0] outline-none border-none p-3 w-[50%] transition-all duration-300 ${
                                activeButton === 'familiar' ? 'active-familiar' : ''
                            }`}
                        >
                            I already know <br /> this word
                            <div className="text-xs text-neutral-800 dark:text-gray-500 mt-1">Press F</div>
                        </button>
                        <button 
                            data-action="unfamiliar"
                            onClick={handleUnfamiliar}
                            className={`unfamiliar-button rounded-br-[18px] cursor-pointer select-none bg-transparent text-[#c0c0c0] outline-none border-none p-3 w-[50%] transition-all duration-300 ${
                                activeButton === 'unfamiliar' ? 'active-unfamiliar' : ''
                            }`}
                        >
                            Start learning <br /> this word
                            <div className="text-xs text-neutral-800 dark:text-gray-500 mt-1">Press J</div>
                        </button>
                    </div>
                </div>
            </div>

            {/* CSS for visual effects */}
            <style>{`
                .familiar-button.active-familiar {
                    background-color: var(--familiar) !important;
                    color: white !important;
                    transform: scale(1.05);
                }
                
                .unfamiliar-button.active-unfamiliar {
                    background-color: var(--unfamiliar) !important;
                    color: white !important;
                    transform: scale(1.05);
                }
                
                .familiar-button:hover:not(.active-familiar),
                .unfamiliar-button:hover:not(.active-unfamiliar) {
                    background-color: #374151 !important;
                }
            `}</style>
        </div>
    );
};

export default MixedModeContent;