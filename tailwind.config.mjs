/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#030303',
        surface: {
          DEFAULT: '#0a0a0c',
          raised: '#121216',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.04)',
        },
        mob: {
          gold: '#f59e0b',
          amber: '#d97706',
          glow: '#fbbf24',
          cyan: '#06b6d4',
          blue: '#3b82f6',
        },
        legal: {
          bg: '#08090d',
          cream: '#F9F8F6',
          gold: '#C5A880',
          dark: '#12141c',
          border: 'rgba(255, 255, 255, 0.12)',
        }
      },
      fontFamily: {
        sans: ['Geist', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'Fira Code', 'monospace'],
        serif: ['Newsreader', 'Playfair Display', 'Merriweather', 'Georgia', 'serif'],
      },
      animation: {
        'aurora-slow': 'aurora 18s ease-in-out infinite alternate',
        'aurora-wave': 'wave 12s ease-in-out infinite alternate',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        aurora: {
          '0%': { transform: 'translateX(-20%) translateY(-10%) rotate(0deg) scale(1)' },
          '50%': { transform: 'translateX(10%) translateY(5%) rotate(4deg) scale(1.15)' },
          '100%': { transform: 'translateX(-10%) translateY(-5%) rotate(-3deg) scale(1.05)' },
        },
        wave: {
          '0%': { opacity: '0.45', transform: 'scaleY(0.95) skewX(-4deg)' },
          '50%': { opacity: '0.8', transform: 'scaleY(1.15) skewX(5deg)' },
          '100%': { opacity: '0.55', transform: 'scaleY(1) skewX(-2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.35', filter: 'blur(45px)' },
          '50%': { opacity: '0.7', filter: 'blur(65px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};
