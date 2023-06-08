/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily:{
      'urbanist':['Urbanist','sans-serif']
    },
    extend: {
    },
    colors:{
      'black':{
        404:'#404040',
        525:'#525252',

      },
      'primary':'#03A2B5'
    }
  },
  plugins: [],
}

