/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2c6c43',
        secondary: '#a43c4c',
        tertiary: '#eb343b'
      }
    },
  },
  plugins: [],
}

