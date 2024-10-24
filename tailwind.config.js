/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#482ff7",
        secondary: "#f72f72",
      },
      fontFamily: {
        headings: ["Urbanist", "sans-serif"],
        paragraphs: ["Poppins", "Roboto"],
        disclaimer: ["New Amsterdam", "sans-serif"],
      },
      spacing: {
        very_large: "32rem",
        super_big_large: "36rem",
      },
    },
  },
  plugins: [],
};
