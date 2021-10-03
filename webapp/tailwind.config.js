module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Inter, sans-serif',
      }, 
      colors: {
        base: "#cf534a",
        secondary: "#3AA0DA",
        "secondary-hover": "#2D96D1",
        "b-color": "#308bbf"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
