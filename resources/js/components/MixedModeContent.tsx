// components/MixedModeContent.tsx
import React, { useEffect, useState } from 'react';

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
    const [buttonState, setButtonState] = useState({
        familiar: 'default',
        unfamiliar: 'default'
    });

    // Get a random word from the japaneseWords array
    const getRandomWord = () => {
        if (japaneseWords.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * japaneseWords.length);
        return japaneseWords[randomIndex];
    };

    const randomWord = getRandomWord();

    const familiar = () => {
        console.log("You pressed the 'f' key!");
        setButtonState(prev => ({ ...prev, familiar: 'active' }));
        // Add any other familiar() logic here
    };

    const unfamiliar = () => {
        console.log("You pressed the 'j' key!");
        setButtonState(prev => ({ ...prev, unfamiliar: 'active' }));
        // Add any other unfamiliar() logic here
    };

    const green = () => {
        setButtonState(prev => ({ ...prev, familiar: 'default' }));
    };

    const grey = () => {
        setButtonState(prev => ({ ...prev, unfamiliar: 'default' }));
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const key = event.key.toLowerCase();
            
            if (key === 'f') {
                familiar();
                setTimeout(green, 300);
                // Trigger page reload after a short delay to show the visual feedback
                setTimeout(() => window.location.reload(), 150);
            } else if (key === 'j') {
                unfamiliar();
                setTimeout(grey, 300);
                // Trigger page reload after a short delay to show the visual feedback
                setTimeout(() => window.location.reload(), 150);
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
                <div className="bg-[#212121] rounded-[18px] shadow-md p-6 text-center">
                    <p className="text-white text-lg">No words available</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container flex justify-center mx-auto px-4 py-8">
            <div className="bg-[#212121] w-[45vw] rounded-[18px] shadow-md">
                
                {/* Single random word card */}
                <div className="max-w-md mx-auto rounded-lg p-6">
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

                {/* Buttons with keyboard functionality */}
                <div className="text-center mt-6">
                    <div className="">
                        <button 
                            onClick={() => {
                                familiar();
                                setTimeout(green, 300);
                                setTimeout(() => window.location.reload(), 150);
                            }}
                            className={`rounded-bl-[18px] cursor-pointer select-none outline-none border-none transition-all duration-300 rounded-lg p-3 w-[50%] ${
                                buttonState.familiar === 'active' 
                                    ? 'bg-[var(--familiar)] text-white scale-105' 
                                    : 'bg-transparent text-[#c0c0c0]'
                            }`}
                        >
                            I already know <br /> this word
                            <div className="text-xs text-gray-500 mt-1">Press F</div>
                        </button>
                        <button 
                            onClick={() => {
                                unfamiliar();
                                setTimeout(grey, 300);
                                setTimeout(() => window.location.reload(), 150);
                            }}
                            className={`rounded-br-[18px] cursor-pointer select-none outline-none border-none transition-all duration-300 rounded-lg p-3 w-[50%] ${
                                buttonState.unfamiliar === 'active' 
                                    ? 'bg-[var(--unfamiliar)] text-white scale-105' 
                                    : 'bg-transparent text-[#c0c0c0]'
                            }`}
                        >
                            Start learning <br /> this word
                            <div className="text-xs text-gray-500 mt-1">Press J</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MixedModeContent;