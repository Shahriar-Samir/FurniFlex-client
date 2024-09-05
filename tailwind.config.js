/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'titleBlue':'rgb(30, 153, 245)',
        'commonBlack': 'rgb(14, 14, 14)'
      },
      fontFamily:{
        'titleFont': '"Inter", sans-serif'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui:{
    themes: ['light']
  }
}