module.exports = {
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // 'heading': ['"Big Shoulders Display"', cursive],
        // 'body': ['"Lexend Deca"', sans-serif]
        heading: "'Big Shoulders Display', cursive",
        body: "'Lexend Deca', serif"
      },
      colors: {
        brightOrange: '#E38826',
        darkCyan: '#006970',
        veryDarkCyan: '#004241',
        veryLightGray: '#F2F2F2',
        transWhite: '#ffffffbf'
      },
      fontSize: {
        title: '2.5rem'
      },
      margin: {
        desk: '32rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
