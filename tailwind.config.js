/** @type {import('tailwindcss').Config} */
import animatedPlugin from 'tailwindcss-animated';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        eefPrimary: "#474F7A",
        eefSecondary: "#81689D",
        eefAccent: "#1F2544",
      },
    },
  },
  plugins: [
    animatedPlugin,
  ],
}

