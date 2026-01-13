/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7289DA',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#5865F2', 
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#57F287',
          foreground: '#ffffff',
        },
        discord: {
          DEFAULT: '#5865F2',
        },
        destructive: {
          DEFAULT: '#ED4245',
          foreground: '#ffffff',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};