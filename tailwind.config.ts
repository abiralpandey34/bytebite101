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
        light: {
          fg: "var(--color-fg)",
          fgWhite: "var(--color-fg-white)",
          bg: "var(--color-bg)",
          fadeText: "var(--color-fade-text)",
          theme: "var(--color-theme)",
          lightTheme: "var(--color-theme-fade)",
        },

        dark: {
          fg: "var(--color-fg)",
          bg: "var(--color-bg)",
          fadeText: "var(--color-fade-text)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
