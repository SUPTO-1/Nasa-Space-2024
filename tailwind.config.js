/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
        montserrat: "'Montserrat', sans-serif",
        robotoMono: "'Roboto Mono', monospace",
        blackOp: "'Black Ops One', cursive",
        kurale: "'Kurale', serif",
      },
    },
  },
  plugins: [require('daisyui'),],
}

