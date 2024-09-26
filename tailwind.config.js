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
      },
      screens: {
        sm: "320px",
        xl: "1280px",
      },
      boxShadow: {
        centrada: "2px 2px 2px rgba(0, 0, 0, 0.8)",
      },
      fontFamily: {
        boring: ["Boring Sans", "sans-serif"],
        kabrio: ["Kabrio", "sans-serif"],
      },
      keyframes: {
        "gray-scale": {
          "0%": { backgroundColor: "#1a1a1a" },
          "20%": { backgroundColor: "#333333" },
          "50%": { backgroundColor: "#666666" },
          "80%": { backgroundColor: "#333333" },
          "100%": { backgroundColor: "#1a1a1a" },
        },
      },
      animation: {
        "gray-scale": "gray-scale 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
});
