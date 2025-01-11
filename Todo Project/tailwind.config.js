/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'gradient-move': 'gradient-slide 3s infinite linear',
      },
      keyframes: {
        'gradient-slide': {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '100% 50%' },
        },
      },
      backgroundSize: {
        '200%': '200%',
      },
    },
  },
  plugins: [],
}

