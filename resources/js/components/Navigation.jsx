import { Link } from '@inertiajs/react';

export default function Navigation() {
    return (
        <nav className="h-[70px] w-full bg-[#212121] flex items-center px-4 gap-4">
            <div className="h-[70px] w-[10%] flex items-center justify-center">
                <p className="text-white">Back</p>
            </div>
    <div className="w-full flex justify-evenly">        
            <Link 
                href="/learn-new-words" 
                className="p-[10px] bg-[var(--main-color)] rounded-[18px] hover:bg-blue-700 text-white font-bold inline-block"
            >
                Learn New Words
            </Link>
            
            <div className="relative flex">
                <span className="absolute bg-[var(--word-counter)] h-min w-auto rounded-[18px] right-[-50px] px-2.5  z-10 inline-block">
                    2384
                </span>
            <Link 
                href="/review-words" 
                className="relative p-[10px] rounded-[18px] hover:bg-blue-700 text-white font-bold inline-block"
            >
                Review Words
            </Link>
            </div>
</div>      
        </nav>
    );
}