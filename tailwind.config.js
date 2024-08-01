/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      orange: "#FF4D00",
      black: "#393939",
    },
    extend: {
      animation: {
        "bounce-1.25": "bounce 1.25s infinite",
      },
      margin: {
        50: "50px",
        25: "25px",
        15: "15px",
        10: "10px",
      },
      padding: {
        "pt-main": "300px 0 300px",
        100: "100px",
        50: "50px",
        25: "25px",
        15: "15px",
        10: "10px",
      },
    },
  },
  plugins: [],
};
