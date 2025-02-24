import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
const hamburgers = require("tailwind-hamburgers");
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.tsx",
    "./node_modules/@material-tailwind/react/components/**/*.",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-[#FFD93D]",
    "bg-[#6ECFF6]",
    "bg-[#43B756]",
    "bg-[#FF6B9C]",
    "bg-[#FF8C42]",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
        fredoka: ["'Fredoka One'", "sans-serif"],
      },
      fontSize: {
        md: "1rem", // Customize this value to your preferred size
      },
      screens: {
        xs: "400px",
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        "spin-slow": "spin-slow 3s linear infinite", // custom slower spin animation
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        "spin-slow": {
          // Define a custom slow spin animation
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [forms, hamburgers],

  // include the hamburgers plugin here
};
