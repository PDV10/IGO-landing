/** @type {import('tailwindcss').Config} */
export default {
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
};
