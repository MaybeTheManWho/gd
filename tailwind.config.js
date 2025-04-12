/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5865f2',
        'primary-dark': '#4752c4',
        secondary: '#99aab5',
        'secondary-dark': '#7d8991',
        dark: '#2c2f33',
        darker: '#23272a',
        success: '#57f287',
        danger: '#ed4245',
        warning: '#fee75c',
      },
    },
  },
  plugins: [],
}