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
      },
      backgroundImage: {
        'home_large_banner': "url('/images/home/homeBg.jpg')",
        'home_small_banner': "url('/images/home/homeSmallBg.png')",
      },
    },
  },
  plugins: [],
}

