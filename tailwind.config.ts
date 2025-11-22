import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sophisticated Light System with Dark Accents
        primary: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917', // Deep charcoal for contrast
        },
        accent: {
          50: '#f0fdf9',
          100: '#ccfbef',
          200: '#9ff7e1', // Mint/cyan accent
          300: '#5fe3c7',
          400: '#2dcca7',
          500: '#14b091',
          600: '#0d9177',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7cfc7',
          300: '#9daa9d',
          400: '#6b7d62', // Muted sage
          500: '#556650',
          600: '#445241',
        },
        copper: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bc9a8e', // Rose gold/copper
          600: '#a07c6f',
        },
        sand: {
          50: '#fafaf9',
          100: '#f5f4f1',
          200: '#ebe9e3',
          300: '#dcd9d0',
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', 'sans-serif'],
        serif: ['Georgia', '"Times New Roman"', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'breathe': 'breathe 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
      boxShadow: {
        'soft': '0 20px 60px -15px rgba(0, 0, 0, 0.1)',
        'medium': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        'card': '0 10px 40px -10px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 40px rgba(159, 247, 225, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;
