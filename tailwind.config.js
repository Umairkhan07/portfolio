/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "640px",
      lg: "1024px",
      desktop: "1280px",
    },
    extend: {
      fontFamily: {
        Yanone: ["Yanone Kaffeesatz", "sans-serif"],
        Sacramento: ["Sacramento", "cursive"],
        Lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};
