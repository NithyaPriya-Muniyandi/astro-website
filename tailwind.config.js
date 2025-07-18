/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
     keyframes: {
  'fade-in-up': {
    '0%': { opacity: '0', transform: 'translateY(20px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  'fade-in-left': {
    '0%': { opacity: '0', transform: 'translateX(-20px)' },
    '100%': { opacity: '1', transform: 'translateX(0)' },
  },
},
animation: {
  'fade-in-up': 'fade-in-up 1s ease-out forwards',
  'fade-in-left': 'fade-in-left 1s ease-out forwards',
},

    },
  },
  plugins: [require('tailwindcss-animate')],
}
