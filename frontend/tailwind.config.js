/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D85A30',
          light: '#FAECE7',
        },
        accent: {
          DEFAULT: '#7F77DD',
          light: '#EEEDFE',
        },
        stone: '#F1EFE8',
        charcoal: '#2C2C2A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
