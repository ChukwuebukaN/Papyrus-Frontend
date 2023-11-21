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
        "papyrus-blue": "#243857",
        "papyrus-gray": "#6d7a91",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};