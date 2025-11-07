import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css', 
                'resources/js/app.tsx',
            ],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    server: {
        host: '0.0.0.0',
        port: process.env.VITE_PORT ? parseInt(process.env.VITE_PORT) : 5173,
        hmr: process.env.NODE_ENV === 'development' ? {
            host: process.env.VITE_HOST || 'localhost',
            protocol: 'wss' // Используем wss для HTTPS
        } : undefined,
    },
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
});