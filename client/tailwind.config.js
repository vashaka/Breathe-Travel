/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // xs: "320px",
      smd: "600px",
      md: "1100px",
      lg: "1420px",
      xlg: "1580px",
      xl: "1700px",
    },
  },
  plugins: [],
};
