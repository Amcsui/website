import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "display-lg": "4.75rem",
        "display-md": "3.75rem",
        "display-sm": "3rem",
        "head-lg": "2.625rem",
        "head-md": "2.3125rem",
        "head-sm": "2rem",
        "head-xs": "1.625rem",
        "head-2xs": "1.25rem",
        "title-lg": "1.8125rem",
        "title-md": "1.375rem",
        "title-sm": "1.0625rem",
        "body-lg": "1.1875rem",
        "body-md": "1.0625rem",
        "body-sm": "0.875rem",
        "label-lg": "1.0625rem",
        "label-md": "0.9375rem",
        "label-sm": "0.8125rem",
      },
      colors: {
        "background": "var(--background)",
        "on-background": "var(--on-background)",
        "on-background-variant": "var(--on-background-variant)",
        "primary": "var(--primary)",
        "on-primary": "var(--on-primary)",
        "primary-container": "var(--primary-container)",
        "on-primary-container": "var(--on-primary-container)",
        "secondary": "var(--secondary)",
        "on-secondary": "var(--on-secondary)",
        "secondary-container": "var(--secondary-container)",
        "on-secondary-container": "var(--on-secondary-container)",
        "surface": "var(--surface)",
        "surface-darker": "var(--surface-darker)",
        "surface-dark": "var(--surface-dark)",
        "on-surface": "var(--on-surface)",
        "on-surface-variant": "var(--on-surface-variant)",
        "tertiary": "var(--tertiary)",
        "tertiary-container": "var(--tertiary-container)",
        "outline": "var(--outline)",
        "outline-variant": "var(--outline-variant)",
      },
    },
  },
  plugins: [],
};
export default config;
