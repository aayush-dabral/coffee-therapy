const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['"Anton"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"]
      },
      dropShadow: {
        'white': '0 4px 6px rgba(255, 255, 255, 0.5)',
      }
    },
  },
  plugins: [],
}

