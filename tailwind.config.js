/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazir', 'IranSans', 'Shabnam', 'sans-serif'],
      },
      colors: {
        primary: '#4F46E5',
        secondary: '#F59E0B',
      },
    },
  },
  plugins: [],
}