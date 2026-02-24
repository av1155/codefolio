import forms from "@tailwindcss/forms"; // Tailwind Forms Plugin
import typography from "@tailwindcss/typography"; // Tailwind Typography Plugin
import type { Config } from "tailwindcss";

// Tailwind CSS Configuration
// Documentation: https://tailwindcss.com/docs/configuration

const config: Config = {
    // Paths to all of the template files in the project
    // Documentation: https://tailwindcss.com/docs/content-configuration
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Includes all page files
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Includes all component files
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Includes all application files
    ],

    // Safelist classes to prevent them from being purged
    // Documentation: https://tailwindcss.com/docs/content-configuration#safelisting-classes
    safelist: [
        "animate-marquee-sm",
        "animate-marquee-md",
        "animate-marquee-lg",
        "animate-gradient-move",
    ],

    // Extending Tailwind's default theme
    // Documentation: https://tailwindcss.com/docs/theme
    theme: {
        extend: {
            // Custom color palette
            colors: {
                primary: "var(--color-primary)", // Indigo (from globals.css)
                secondary: "var(--color-secondary)", // Lighter Indigo (from globals.css)
                accent: "var(--color-accent)", // Pink accent (from globals.css)
                dark: "var(--color-dark)", // Dark background (from globals.css)
                light: "var(--color-light)", // Light background (from globals.css)
            },
            // Custom font family
            fontFamily: {
                sans: ["Inter", "sans-serif"], // Default font family
            },
            // Custom animations
            // Documentation: https://tailwindcss.com/docs/animation
            animation: {
                "marquee-sm": "marquee 30s linear infinite", // smartphone screen
                "marquee-md": "marquee 45s linear infinite", // medium screen
                "marquee-lg": "marquee 70s linear infinite", // wide screen
                gradientMove: "gradientMove 10s ease infinite",
            },
            // Keyframes for custom animations
            // Documentation: https://tailwindcss.com/docs/animation#customizing-keyframes
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
            // Custom background size
            // Documentation: https://tailwindcss.com/docs/background-size
            backgroundSize: {
                "size-130": "130% 130%", // Enlarged background size for animations
            },
        },
    },

    // Tailwind Plugins
    // Documentation: https://tailwindcss.com/docs/plugins
    plugins: [
        forms, // Form styles plugin: https://github.com/tailwindlabs/tailwindcss-forms
        typography, // Typography plugin: https://github.com/tailwindlabs/tailwindcss-typography
    ],
};

export default config;
