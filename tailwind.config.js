/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        first: "#008080",      
        second: "#FF6F61", 
        third: "#F9F9F9",
      },
    },
  },
  plugins: [require("daisyui")],

}

