const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        100: "#f1f8f6",
        200: "#d4e9e2",
        300: "#008248",
        400: "#1e3932",
      },
      secondary: "#f3f1e7",
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
    },
    fontFamily: {
      sans: "'Helvetica Neue',Helvetica,Arial,sans-serif",
    },
    extend: {
      backgroundImage: {
        hero: "url('./img/hero-img.webp')",
      },
      fontSize: {
        13: "0.8125rem",
        "2.5xl": "1.75rem",
        19: "1.188rem",
      },
      padding: {
        1.75: "0.4375rem",
      },
      margin: {
        18: "4.5rem",
      },
      letterSpacing: {
        lessTight: "-0.009em",
      },
      height: {
        39: "9.875rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
