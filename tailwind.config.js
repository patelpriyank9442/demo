/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        buttonShadow: "0px 4px 19px 0px #7793414D;",
      },
    },
  },
  plugins: [],
};
