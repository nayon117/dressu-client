/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        first: "#808080",      
        second: "#5eaaa8", 
        third: "#ff6666",
      },
    },
  },
  plugins: [require("daisyui")],

}

