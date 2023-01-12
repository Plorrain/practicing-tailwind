/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.jsx", "./index.html"],
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT:"#0FA9E6",
          light:"#3fbaeb",
          dark:"#0C87B8",
        }
      },
      fontFamily: {
        headline: "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
};
