module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5865f2',
          dark: '#4752c4',
        },
        secondary: {
          DEFAULT: '#99aab5',
          dark: '#7d8991',
        },
        dark: {
          DEFAULT: '#2c2f33',
          darker: '#23272a',
        },
        success: '#57f287',
        danger: '#ed4245',
        warning: '#fee75c',
      }
    },
  },
  plugins: [],
}