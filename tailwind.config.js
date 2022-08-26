/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#FFF9E1",
          light: "#FFF9E1",
          dark: "#413f39",
        },
      },
    },
  },
  plugins: [],
};
