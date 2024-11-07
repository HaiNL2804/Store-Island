/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "40px": "40px",
        "12px": "12px",
      },
      padding: {
        "22px": "22px",
        "60px": "60px",
      },
      borderRadius: {
        "10px": "10px",
      },
      margin: {
        "18px": "18px",
      },
    },
  },
  plugins: [],
};
