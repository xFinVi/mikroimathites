import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
const hamburgers = require("tailwind-hamburgers"); // import the hamburgers plugin

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                fredoka: ["'Fredoka One'", "sans-serif"],
            },
            screens: {
                xs: "380px",
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
    plugins: [forms, hamburgers], // include the hamburgers plugin here
};
