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
      },
      animation: {
        'oscilation': 'bounce 3s infinite alternate',
        'appear': 'appear 1s ease-in'
      },
      keyframes:{
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
        },
      },
    },
  plugins: [],
  }
}