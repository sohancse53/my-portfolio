/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7e22ce",
          hover: "#9333ea"
        },
        'background-dark': '#0d1117',
        'surface-dark': 'rgba(255, 255, 255, 0.05)',
        'border-dark': 'rgba(255, 255, 255, 0.1)'
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
