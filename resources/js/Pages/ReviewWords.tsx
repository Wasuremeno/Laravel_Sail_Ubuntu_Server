import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import ThemeToggle from '@/components/ThemeToggle';

// Theme toggle component
// const ThemeToggle = () => {
//     const [isDark, setIsDark] = useState(false);

//     useEffect(() => {
//         const savedTheme = localStorage.getItem('theme');
//         const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
//         const initialTheme = savedTheme ? savedTheme === 'dark' : systemPrefersDark;
//         setIsDark(initialTheme);
        
//         if (initialTheme) {
//             document.documentElement.classList.add('dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//         }
//     }, []);

//     const toggleTheme = () => {
//         const newTheme = !isDark;
//         setIsDark(newTheme);
        
//         if (newTheme) {
//             document.documentElement.classList.add('dark');
//             localStorage.setItem('theme', 'dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//             localStorage.setItem('theme', 'light');
//         }
//     };

//     return (
//         <button
//             onClick={toggleTheme}
//             className="fixed top-4 right-4 p-3 bg-gray-200 dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50"
//             aria-label="Toggle theme"
//         >
//             {isDark ? (
//                 <span className="text-xl">☀️</span>
//             ) : (
//                 <span className="text-xl">🌙</span>
//             )}
//         </button>
//     );
// };

function ReviewWords() {
    return (
        <>
            <Head title="Review words" />
            
            {/* Add the theme toggle button */}
            <ThemeToggle />
            
            <div className="min-h-screen bg-white dark:bg-[#141414] transition-colors duration-200">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        Review words
                    </h1>
                    <div className='font-sourgummy text-red-700 dark:text-red-400 text-[40px]'>
                        Danil pidor
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReviewWords;