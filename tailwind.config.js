/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5286e1',
        'primary-light': '#c4eeff',
        'dark': '#111',
        'light': '#ffffee',
        'grey-dark': '#333', 
      },   
    },
  },
  plugins: [],
}