/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      fontSize: ['hover'], //this is added for the course's purpose but it was working even without
    },
  },
  plugins: [],
}
