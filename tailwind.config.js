/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0B192C',
          800: '#0F2038',
          700: '#1E3E62',
        },
        academy: {
          brown: '#3E1A14',
          brownHover: '#2A110D',
          maroon: '#6B1B29',
          gold: '#C98A2C',
          amber: '#D97706',
          bgWarm: '#FAF6F0',
          cardWarm: '#FFFFFF',
          borderWarm: '#E2DAD0',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 4px 20px -2px rgba(62, 26, 20, 0.08)',
        'warm-hover': '0 12px 30px -4px rgba(62, 26, 20, 0.16)',
      }
    },
  },
  plugins: [],
}
