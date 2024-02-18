/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-tet": "url('components/Home/background.png')",
        "background-login":
          "url('https://static.chotot.com/storage/marketplace/login-background.webp')",
      },
      colors: {
        primary: "#ffba00",
      },
    },
  },
  plugins: [],
};
