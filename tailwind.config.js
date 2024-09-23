/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        brand: {
          purple: "#AF367B",
          navy: "#1B234A",
          sky: "#F2F5FF",
          black: "#222121",
          gray: {
            100: "#E8E8E8",
            500: "#787878",
          },
        },
      },
    },
  },
  plugins: [],
};
