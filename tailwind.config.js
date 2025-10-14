/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./resources/**/*.ts",
    "./resources/**/*.tsx",
    "./storage/framework/views/*.php",
    // Add any other paths that contain your classes
  ],
  
  theme: {
    extend: {
      // Font Family Configuration
      fontFamily: {
        sans: ['SourGummy', 'system-ui', 'sans-serif'],
        serif: ['ui-serif', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
        sourgummy: ['SourGummy', 'sans-serif'],
      },
      
      // Font Weight Configuration for Variable Fonts
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      
      // Colors (optional - customize as needed)
      colors: {
        primary: {
          50: '#fef7ee',
          100: '#fdedd7',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        }
      },
      
      // Spacing (optional)
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      
      // Animation (optional)
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  
  // Variants
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['active'],
      textColor: ['active'],
    },
  },
  
  // Plugins
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],
  
  // Purge options for production (if using older Tailwind)
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './resources/**/*.blade.php',
      './resources/**/*.js',
      './resources/**/*.jsx',
      './resources/**/*.ts',
      './resources/**/*.tsx',
    ],
  },
}