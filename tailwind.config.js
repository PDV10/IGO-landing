/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gris-claro": "#e8e8e8",
        "gris-oscuro": "#878787",
        "custom-color": "FF5733",
      },
      screens: {
        sm: "320px",
        msm: "640px",
        xl: "1280px",
        xs: "400px",
      },
      boxShadow: {
        centrada: "2px 2px 2px rgba(0, 0, 0, 0.8)",
      },
      transitionProperty: {
        "width-color": "width, color",
      },
    },
  },
  plugins: [],
});
