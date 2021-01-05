module.exports = {
  purge: {
    mode:'layers',
    content : ['./public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'pinkred' : '#FF5B5B',
        'pinklight' : '#ffecec',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
