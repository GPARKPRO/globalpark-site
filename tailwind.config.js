/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        gray: {
          900: '#111111',
          800: '#1a1a1a',
          700: '#2e2e2e',
          600: '#4b4b4b',
          400: '#9ca3af',
        },
      },
    },
  },
  plugins: [],
}
