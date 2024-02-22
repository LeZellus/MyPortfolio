/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#5BBF9B',
          50: '#DFF3EC',
          100: '#D0EDE3',
          200: '#B3E1D1',
          300: '#96D6BF',
          400: '#78CAAD',
          500: '#5BBF9B',
          600: '#3FA27F',
          700: '#307A5F',
          800: '#205240',
          900: '#102920',
          950: '#081511'
        },
        'secondary': {
          DEFAULT: '#EAACC6',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FAEDF3',
          400: '#F2CDDC',
          500: '#EAACC6',
          600: '#DF7FA7',
          700: '#D35289',
          800: '#BE306B',
          900: '#912552',
          950: '#7B1F45'
        },
      }
    },
  },
  plugins: [],
}

