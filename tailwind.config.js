/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        winter: {
          "primary": "#1c3a5e",
          "primary-content": "#FFFFFF",
        },
      },
      "light",
      "dark",
    ]
  }
}