/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    colors: {
      'white': "#ffffff",
      'blue': "#0B5EA1",
      'gray': "#3F4B4D",
      'green': {
        100: "#1B9E2B",
        200: "#1B9F85",
        300: "#1B9E57",
      },
    },
    fontFamily: {
      'vazir': ['Vazirmatn', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

