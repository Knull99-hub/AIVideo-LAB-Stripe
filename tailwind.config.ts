import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#6C47E0", // Vivid medium purple
                    hover: "#5A3BC0",
                },
                secondary: {
                    blue: "#1A0D5A", // Deep blue
                    peach: "#F5A18E", // Warm peach/orange
                },
                neutral: {
                    50: "#F9F9F9",
                    100: "#F3F3F3",
                    900: "#0F0F14", // Black for buttons
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                heading: ["var(--font-heading)", "Helvetica Neue", "Arial", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
