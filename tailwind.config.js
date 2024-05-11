/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-blue": "#363F72",
        "light-blue": "#E3E6F4",
      },
    },
  },
  plugins: [],
};
