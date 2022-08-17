/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'mulish' : ['Mulish', 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],
  
  daisyui: {
    themes: ["autumn"],
  },
}
