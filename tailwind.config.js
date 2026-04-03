/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
          sans: ['Overpass', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
      },
      colors: {
          gfnavy: '#0d223f',
          gforange: '#f25922',
          gflightblue: '#d7eff4',
          gfblue: '#00afc7',
          gftext: '#3b4351'
      }
    }
  },
  plugins: [],
}
