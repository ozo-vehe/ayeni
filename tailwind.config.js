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
        "670": "670px",
        "700": "700px",
        "720": "720px",
        "730": "730px",
        "750": "750px",
      },
      colors: {
        "bg-color": "#F5F7FE",
      },
      borderRadius: {
        "32": "32px", 
      }
    },
  },
  plugins: [],
}