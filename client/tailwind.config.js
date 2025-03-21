/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#FF782D",
          hover: "#FFAB2D",
          pressed: "#F8620E",
        },
        absolute: {
          black: "#000000",
          white: "#FFFFFF",
        },
        neutral: {
          grey: "#9D9D9D",
          lightgrey: "#EAEAEA",
          whitegrey: "#F5F5F5",
        },
        fontFamily: {
          title:["Exo","sans-serif"]
        }
      },
    },
  },
  plugins: [],
};
