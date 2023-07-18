module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: "#F9CF01",
        green: "#4CAF50",
        dark: "#CC9B00",
        gray: "#c7c7c7",
      },

      fontFamily: {
        chilanka: ['"Chilanka"', "cursive"],
      },
    },

    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "30px",
      "3xl": "32px",
      "4xl": "48px",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
