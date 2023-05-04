/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');


module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        primary: '#B63E96',
        primaryDark: '#58E6D9',
      },
    },
    plugins: [],
  }
}