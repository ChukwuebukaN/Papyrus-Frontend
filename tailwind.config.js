/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sfProDisplayBold: "'SfProDisplayBold', serif",
        sfProDisplayMedium: "'SfProDisplayMedium', serif",
        sfProDisplayRegular: "'SfProDisplayRegular', serif",
      },
      spacing: {
        529: "529px",
      },
      colors: {
        "yourproject-red": "#ED2025",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};