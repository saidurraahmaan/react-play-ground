/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "900px",
      xl: "1024px",
      xxl: "1280px",
    },

    extend: {
      colors: {
        defaultColor: "#1A2238",
      },
    },
  },
  plugins: [],
};
