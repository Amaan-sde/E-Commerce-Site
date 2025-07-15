/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4263eb",
        secondary: "#63e6be",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
        // screens: {
        //   sm: "640px",
        //   md: "768px",
        //   lg: "1024px",
        //   xl: "1280px",
        //   "2xl": "1536px",
        // },
      },
    },
  },
  plugins: [],
};
