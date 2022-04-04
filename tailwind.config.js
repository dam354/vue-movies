module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "fruit-red": "hsl(0, 97%, 63%)",
        "dark-blue": "hsl(223, 30%, 9%)",
        "grey-blue": "hsl(223, 23%, 46%)",
        "medium-blue": "hsl(223, 36%, 14%)",
        "pure-white": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
    },
    plugins: [],
  },
};
