/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gris-claro": "#e8e8e8",
        "gris-oscuro": "#878787",
      },
    },
  },
  plugins: [],
});
