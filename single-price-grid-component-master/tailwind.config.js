/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        //Primary
        Cyan: "hsl(179, 62%, 43%)",
        "Bright-Yellow": "hsl(71, 73%, 54%)",
        //Neutral
        "Light-Gray": "hsl(204, 43%, 93%)",
        "Grayish-Blue": "hsl(218, 22%, 67%)",
      },
      spacing: {
        375: "23.438rem",
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
