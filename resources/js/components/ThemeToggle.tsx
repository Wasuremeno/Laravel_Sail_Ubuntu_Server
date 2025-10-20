import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check for saved theme preference or use system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const initialTheme = savedTheme ? savedTheme === 'dark' : systemPrefersDark;
        setIsDark(initialTheme);
        
        if (initialTheme) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        
        if (newTheme) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 p-3 bg-gray-200 dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <span className="text-xl">☀️</span> // Sun icon for light mode
            ) : (
                <span className="text-xl">🌙</span> // Moon icon for dark mode
            )}
        </button>
    );
};

export default ThemeToggle;