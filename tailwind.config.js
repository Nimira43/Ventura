/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      'primary': '#5286e1',
      'primary-lg': '#c4eeff',
      'dark': '#111',
      'grey-dk': '#333',
      'grey-md': '#888',
      'grey-lg': '#ccc',
      'grey-xl': '#eee',
      'lighter-blue' : '#edf7ff',
    },
  },
};
export const plugins = [];
