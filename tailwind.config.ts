import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0A0A',
          soft: '#171717',
        },
        paper: {
          DEFAULT: '#FFFFFF',
          soft: '#FAFAFA',
        },
        pink: {
          DEFAULT: '#D63384',
          soft: '#F5C4DD',
          deep: '#A3255F',
        },
        gold: {
          DEFAULT: '#D4AF37',
          soft: '#EAD98F',
          deep: '#A8841F',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #D63384 0%, #D4AF37 100%)',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.12)',
        'glass-dark': '0 8px 32px rgba(0,0,0,0.5)',
      },
      backdropBlur: {
        glass: '16px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
