/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkest: '#222831',
        dark: '#31363f',
        cyan: '#76abae',
        light: '#eeeeee'
      }
    },
  },
  plugins: [],
}