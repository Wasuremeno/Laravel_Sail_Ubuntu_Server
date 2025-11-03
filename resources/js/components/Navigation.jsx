import { Link, usePage } from '@inertiajs/react';

export default function Navigation() {
    const { props, url } = usePage();
    const learnedWordsCount = props.learnedWordsCount || 0;
    
    const isLearnNewWordsPage = url.includes('/learn-new-words');
    const isReviewWordsPage = url.includes('/review-words');

    return (
        <nav className="h-[70px] w-full dark:bg-[#212121] bg-white flex items-center px-4 gap-4">
            <div className="h-[70px] w-[10%] flex items-center justify-center">
                <Link
                    href="/" 
                    className="text-black dark:text-white [caret-color:transparent]"
                >
                    Back
                </Link>
            </div>
            <div className="w-full flex justify-evenly">        
                <Link 
                    href="/learn-new-words" 
                    id="LearnNewWords"
                    className={`p-[10px] rounded-[18px] text-black dark:text-white font-bold inline-block [caret-color:transparent] ${
                        isLearnNewWordsPage ? 'dark:bg-[var(--main-color)] bg-gray-100' : ''
                    }`}
                >
                    Learn New Words
                </Link>
                
                <div className="relative flex">
                    {isLearnNewWordsPage && (
                        <span className="absolute bg-[var(--word-counter)] h-min w-auto rounded-[18px] right-[-30px] px-2.5 z-10 inline-block [caret-color:transparent]">
                            {learnedWordsCount}
                        </span>
                    )}

                    <Link 
                        href="/review-words" 
                        id="ReviewWords"
                        className={`relative p-[10px] rounded-[18px] text-black dark:text-white font-bold inline-block [caret-color:transparent] ${
                            isReviewWordsPage ? 'dark:bg-[var(--main-color)] bg-gray-100' : ''
                        }`}
                    >
                        Review Words
                    </Link>
                </div>
            </div>      
        </nav>
    );
}