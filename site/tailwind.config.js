
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./renderer/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'prose': '65rem', // adjust this value as per your needs
        '10/12': '83.333333%',
        '7/12': '58.333333%',
      },
      minWidth: {
        '7/12': '58.333333%',
      },
      fontSize: {
        'base': '1.1rem',
        'lg': '1.4rem',
        'xl': '1.8rem',
        '2xl': '2.0rem',
        '3xl': '2rem',
        '4xl': '3rem',
        '5xl': '3.5rem',
        '6xl': '5rem',
        '7xl': '6rem',
        '8xl': '6rem',
        '9xl': '12rem',
      },
      fontFamily: {
        'header': ['Times', 'serif'],
        'body': ['Lora', 'serif'],
        'ui': ['Lato', 'sans-serif'],
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'bold': 700,
        'extrabold': 800,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}