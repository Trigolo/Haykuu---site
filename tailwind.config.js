/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'orange': '#e28625',
      'cinza': '#d9d9db'
    },

    fontFamily:{
      'paragrafos':"Roboto Condensed",
      'titulo': "Oswald"
    }
  },
  plugins: [],
}