/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // fontSize: {
    //   25: "15rem",
    // },
    extend: {
      height: {
        128: "32rem",
      },
      width: {
        128: "103rem",
      },
      rotate: {
        32: "25deg",
      },
    },
  },
  plugins: [],
};
