/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#0E9F6E',
      },
    }
  },
  plugins: [require("daisyui")],
}
