/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        bebas: ['"Bebas Neue"', "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        builttitling: ["BuiltTitling", "sans-serif"],
      },
    },
  },
  plugins: [],
};
