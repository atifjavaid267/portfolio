/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-orbitron)"],
        title: ["var(--font-inter)"],
        text: ["var(--font-quicksand)"],
      },
      backgroundImage:{
        'computer': "url('/public/assets/background.jpg')",
      },
      colors: {
        background_1: "#1f2937",
        background_2: "#27272a",
        background_3: "#27f72a",
        dark_1: "#000000",
        // dark_1: "#1d2127",
        dark_2: "#212529",
        dark_3: "#343a40",
        // primary: "#9a3412",
        primary: "#fd7e14",
        // primary: "#20c997",

      },
    },
  },
  plugins: [],
}

