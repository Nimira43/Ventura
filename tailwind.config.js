/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5286e1',
        'primary-lg': 'bg-[#c4eeff]',
        'dark': '#111',
        'grey-dk': '#333',
        'grey-md': '#888',
        'grey-lg': '#ccc',
        'grey-xl': '#eee',
        'light': '##edf7ff'
      },
    },
  },
  plugins: [],
};
