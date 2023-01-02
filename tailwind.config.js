/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "30": "30px",
        "40": "40px",
        "400": "400px",
        "500": "500px",
        "600": "600px",
        "650": "650px",
        "660": "660px",
        "670": "670px",
        "700": "700px",
      },
      colors: {
        "bg-color": "#F5F7FE",
      }
    },
  },
  plugins: [],
}