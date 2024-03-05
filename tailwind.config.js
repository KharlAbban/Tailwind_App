/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: "#011936",
      },
      fontFamily: {
        'roobert': ["roobert", 'sans-serif'],
        'google-sans': ["google-sans", 'sans-serif'],
      }
    },
  },
  plugins: [],
}