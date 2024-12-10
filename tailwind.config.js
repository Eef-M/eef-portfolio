/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        eefPrimary: "#87A922",
        eefSecondary: "#FCDC2A",
        eefLight: "#F7F6BB",
        eefDark: "#114232",
      },
    },
  },
  plugins: [],
}

