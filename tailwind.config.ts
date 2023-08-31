import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { max: "767px" },
      tablet: { max: "1023px" },
      "desktop-small": { max: "1365px" },
    },
    extend: {
      colors: {
        primary: "#95FAFE",
        "background-color-dark": "#0D0E38",
        "background-color-light": "#293868",
        "button-color-light": "rgba(47, 64, 107, 0.6)",
      },
      letterSpacing: {
        "3": "3px",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};

export default config;

// Useful tailwind intellisense regex
// https://github.com/paolotiu/tailwind-intellisense-regex-list
