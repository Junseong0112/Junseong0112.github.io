/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      orange: "FF4D00",
      "black-gray": "393939",
    },
    extend: {
      animation: {
        "pulse-3": "pulse 1s infinite",
      },
      margin: {
        "mt-50": "50px 0 0 0",
        "mt-25": "25px 0 0 0",
        "mt-15": "15px 0 0 0",
        "mt-10": "10px 0 0 0",
      },
      padding: {
        "pt-50": "50px 0 0 0",
        "pt-25": "25px 0 0 0",
        "pt-15": "15px 0 0 0",
        "pt-10": "10px 0 0 0",
      },
    },
  },
  plugins: [],
};
