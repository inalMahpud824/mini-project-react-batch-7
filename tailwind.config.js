/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#004D24", // warna head
          secondary: "#F9FFF5", // warna bg
          neutral: "#70E000",
        },
      },
    ],
  },
};
