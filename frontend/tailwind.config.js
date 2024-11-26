/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      container: {
        center: true,
        padding: '.5rem',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
}

