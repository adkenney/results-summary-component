/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: 'hsl(0, 0%, 100%)',
      paleblue: 'hsl(221, 100%, 96%)',
      lightlavender: 'hsl(241, 100%, 89%)',
      darkblue: 'hsl(224, 30%, 27%)',
    },
    fontFamily: {
      sans: ['Hanken Grotesk', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
