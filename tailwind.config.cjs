/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: 'hsl(0, 0%, 100%)',
      paleblue: 'hsl(221, 100%, 96%)',
      lightlavender: 'hsl(241, 100%, 89%)',
      darkblue: 'hsl(224, 30%, 27%)',
      lightred: 'hsl(0, 100%, 67%)',
      orangeyyellow: 'hsl(39, 100%, 56%)',
      greenteal: 'hsl(166, 100%, 37%)',
      cobaltblue: 'hsl(234, 85%, 45%)',
      lightslateblue: 'hsl(252, 100%, 67%)',
      lightroyalblue: 'hsl(241, 81%, 54%)',
      violetblue: 'hsla(256, 72%, 46%, 1)',
      persianblue: 'hsla(241, 72%, 46%, 0)',
    },
    fontFamily: {
      sans: ['Hanken Grotesk', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
