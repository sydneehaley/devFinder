/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
// const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    fontSize: {
      base: '1rem',
      body: '16px',
      ['2xl']: '2rem',
      ['3xl']: '3rem',
      ['4xl']: '4rem',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        theme: 'Satoshi-Variable',
        logo: 'Logo',
      },
      // colors: {
      //   ...colors,
      // },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
    require('daisyui'),
  ],
  // plugins: [require('daisyui')],
  daisyui: {
    themes: ['acid'],
  },
};
