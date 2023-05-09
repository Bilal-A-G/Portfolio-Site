/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        background: "#0c0c0c",
        callToAction: "#ffffff",
        minor: "#86efac",
        selected: "#fca5a5"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "700px",
      },
      backgroundImage: {
        "hero-background": "url('/src/assets/Background.jpg')",
      },
    },
  },
  plugins: [],
};