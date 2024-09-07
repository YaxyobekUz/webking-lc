/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            500: "#0D5FF9",
            700: "#0a43ac",
          },

          dark: {
            900: "#222222",
          },
        },
      },

      fontFamily: {
        Urbanist: ["Urbanist", "sans-serif"],
      },

      backgroundImage: {
        working: "url(./images/others/working.webp)",
        'heroBg': "linear-gradient(180deg, rgba(9, 9, 9, 0.30) 0%, #09161F 1000%), url('./images/others/bg.png')",
      },
    },
  },
  plugins: [],
};