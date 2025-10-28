import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import ThemeToggle from '@/components/ThemeToggle';


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