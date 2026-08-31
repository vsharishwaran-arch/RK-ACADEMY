/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: '#D85628',
          hover: '#C2471B',
          dark: '#742512',
          light: '#FFDBCE',
          bg: '#FFF5F0',
        },
        warmCream: '#FAF0E2',
        navy: {
          950: '#070F1E',
          900: '#0B192C',
          800: '#0F2260',
          700: '#1A3A8F',
          600: '#254EBA',
          500: '#3B82F6',
        },
        academy: {
          terracotta: '#D85628',
          terracottaDark: '#742512',
          terracottaLight: '#FFDBCE',
          terracottaBg: '#FFF5F0',
          skyBlue: '#0284C7',
          skyBlueLight: '#E0F2FE',
          skyBlueBg: '#F0F9FF',
          gold: '#D97706',
          goldHover: '#B45309',
          amber: '#F59E0B',
          lightBg: '#FAF0E2',
          cardBg: '#FFFFFF',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Rubik', 'Outfit', 'Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glow': '0 0 25px rgba(216, 86, 40, 0.15)',
        'card': '0 4px 20px -2px rgba(116, 37, 18, 0.06)',
        'card-hover': '0 12px 30px -4px rgba(116, 37, 18, 0.12)',
      }
    },
  },
  plugins: [],
}
