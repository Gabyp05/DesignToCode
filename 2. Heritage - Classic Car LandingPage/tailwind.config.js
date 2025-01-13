/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "heritage-bg": "#dedbc8",
        "heritage-black": "#1b1b2b",
        "heritage-orange": "#d15e0d",
      },
      fontFamily: {
        roboto: ["Roboto Slab Variable", "serif"],
        montagu: ["Montagu Slab Variable", "serif"],
      },
    },
  },
  plugins: [],
};
