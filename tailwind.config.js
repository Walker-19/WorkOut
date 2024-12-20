/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        'min': 'calc(100% - 16rem)',
      }
    },
  },
  plugins: [],
}

