module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "banner-gray": "#dcdcdc",
      },
      inset: {
        "-2": "-2px",
      },
    },
  },
  plugins: [],
};
