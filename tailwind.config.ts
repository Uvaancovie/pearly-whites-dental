/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-grey": "#f4f4f4",
        "dark-black": "#0a0a0a",
        "accent-purple": "#7c3aed",
        "accent-blue": "#3b82f6",
      },
      boxShadow: {
        "custom-light": "0 10px 15px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0 10px 15px rgba(0, 0, 0, 0.3)",
      },
      screens: {
        "2xl": "1440px", // Add extra-large screen support
      },
    },
  },
  plugins: [],
};
