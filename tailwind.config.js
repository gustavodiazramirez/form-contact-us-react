/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
      colors: {
        'primary': {
          'green-200': 'hsl(148, 38%, 91%)',
          'green-600': 'hsl(169, 82%, 27%)',
          'red': 'hsl(0, 66%, 54%)',
        },
        'neutral': {
          'white': 'hsl(0, 0%, 100%)',
          'grey-500': 'hsl(186, 15%, 59%)',
          'grey-900': 'hsl(187, 24%, 22%)',
        },
      },
      fontSize: {
        'label': '16px',
      },
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
      },
      fontWeight: {
        'normal': 400,
        'bold': 700,
      },
    },
  },
  plugins: [],
}