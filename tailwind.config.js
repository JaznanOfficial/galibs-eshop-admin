/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#0E9F6E',
        'dark-navy': "#1A1B31",
        'admin-bg':"#F9FAFB"
      },
    }
  },
  plugins: [require("daisyui")],
}
