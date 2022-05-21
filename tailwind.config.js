const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter var", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        secondary: "#2E3039",
        "gray-dark": "#A9ADC1",
        gray: {
          100: "#f7f7f7",
          500: "#535661",
          900: "#1f2028",
        },
      },
    },
  },
  plugins: [],
};
