/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./tailwind-components/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["halloween", "light"],
  },
}

