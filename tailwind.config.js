const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primaryColor:'#F6793F',
        secondaryColor:"#D04972",
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('')",
        'footer-texture': "url('')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
