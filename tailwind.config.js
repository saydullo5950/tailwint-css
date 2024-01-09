/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      padding: {
        30: "120px"
      },
      gap: {
        19: "76px"
      },
      width: {
        103: "413px"
      },
      space: {
        19: '76px'
      },
      height: {
        58.75: "235px"
      }
    },
  },
  plugins: [],
}

