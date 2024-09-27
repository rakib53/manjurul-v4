/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        item: "#7C7C7C",
        black: "#101828",
        primary: "#00432B",
      },
      backgroundColor: {
        primary: "#00432B",
      },
      fontFamily: {
        rocLight: ["rocGroteskLight", "sans-serif"],
        rocReg: ["rocGroteskReg", "sans-serif"],
        rocMid: ["rocGroteskMid", "sans-serif"],
        rocBold: ["rocGroteskBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
