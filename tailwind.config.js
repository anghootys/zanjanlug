/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'vazir': ['Vazirmatn', 'sans-serif']
      },
      colors: {
        'white': "#ffffff",
        'blue': "#0B5EA1",
        'gray': {
          100: "#ccdadd",
          300: "#a6b4b6",
          500: "#828f92",
          700: "#606c6e",
          900: "#3f4b4d"
        },
        'green': {
          100: "#1B9E2B",
          200: "#1B9F85",
          300: "#1B9E57",
        },
      },
      fontSize: {
        'error-header': '2rem',
        'error-subtitle': '1rem',
      },

      width: {
        'error-icon-sm': '300px',
        'error-icon-lg': '450px',

        'loading-linux-logo-sm': '100px',
        'loading-linux-logo-lg': '150px',

        'logo-sm': '38px',
      },
      height: {
        'error-icon-sm': '105px',
        'error-icon-lg': '200px',

        'loading-linux-logo-sm': '100px',
        'loading-linux-logo-lg': '150px',

        'logo-sm': '38px',
      }
    },
  },
  plugins: [],
}

