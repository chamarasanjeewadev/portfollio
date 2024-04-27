/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      // poppins: ["Poppins", "sans-serif"],
      sans: ["poppins"],
    },
    extend: {
      content: {
        arrow: "▹",
      },
      colors: {
        main: "#808dad",
        light: "#87ceeb",
        title: "#17A079",
        background:"#0e1630"
      },
    },
  },
  plugins: [],
};
