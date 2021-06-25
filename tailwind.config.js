module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Kanit'],
      'body': ['Lato']
    },    
    extend: {
      colors: {
        primary: '#70ae6e',
        secondary: '#483c46'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
