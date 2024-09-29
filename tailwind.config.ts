import type { Config } from "tailwindcss";

import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    safelist: ["transform", "animate-marquee", "animate-gradient-move"],

    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                accent: "var(--color-accent)",
                dark: "var(--color-dark)",
                light: "var(--color-light)",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            animation: {
                marquee: "marquee 40s linear infinite",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                gradientMove: {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                },
            },
            backgroundSize: {
                "size-200": "200% 200%",
            },
        },
    },
    plugins: [forms, typography],
};

export default config;
