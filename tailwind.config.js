/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
    ],
    safelist: [
      'col-span-1', 'col-span-2', 'col-span-3',
      'row-span-1', 'row-span-2', 'row-span-3',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  