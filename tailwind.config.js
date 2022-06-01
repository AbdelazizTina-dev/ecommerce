module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "banner-gray": "#dcdcdc",
        "text-blue": "#324d67"
      },
      inset: {
        "-2": "-2px",
      },
    },
  },
  plugins: [],
};
