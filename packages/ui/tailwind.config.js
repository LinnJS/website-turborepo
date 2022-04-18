const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,woff2,css,html}',
    './**/*.{js,jsx,ts,tsx}',
    '.src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '../../packages/slide-ui/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height'
      },
      boxShadow: {
        '3xl': '0 4px 8px 0 rgba(0,0,0,0.4), 0 -2px 8px 0 rgba(0,0,0,0.05)',
      },
      fontFamily: {
        mulish: ["Mulish", 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"',],
      },
      screens: {
        '3xl': '1780px',
      },
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        black: '#4E3E54',
        purple: {
          700: '#6648DC',
        },
        green: {
          100: '#E8F8F0',
          400: '#82ddb0',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
};
