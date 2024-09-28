// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
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
                sans: ["var(--font-inter)", "sans-serif"],
            },
            animation: {
                marquee: "marquee 40s linear infinite",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(-50%)" },
                    "100%": { transform: "translateX(100%)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
