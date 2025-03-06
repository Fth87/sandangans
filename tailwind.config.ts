import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        title: ['Playfair Display', ...defaultTheme.fontFamily.serif],
      },

      transitionDuration: {
        '5000': '5000ms',
        '6000': '6000ms',
      },
      colors: {
        brown: {
          DEFAULT: '#402B20',
          50: '#ECEAE9',
          100: '#C4BDBA',
          200: '#A79D98',
          300: '#7F716A',
          400: '#66554D',
          500: '#402B20',
          600: '#3A271D',
          700: '#2D1F17',
          800: '#231812',
          900: '#1B120D',
        },
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
  darkMode: 'selector',
};
