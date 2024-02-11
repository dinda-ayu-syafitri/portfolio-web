/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          "dark-blue": "#363f56",
          "off-white": "#eaeaea",
          grey: "#6a7285",
          "light-grey": "#c4c4c4",
          red: "#f74464",
          orange: "#E67D48",
        },
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        jura: ["Jura", "sans-serif"],
      },
    },
  },
  plugins: [],
};
