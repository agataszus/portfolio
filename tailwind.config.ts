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
      "desktop-mid": { max: "1919px" },
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
      lineHeight: {
        tighter: "1.125",
      },
      boxShadow: {
        "large-right": "36px 0 46px rgb(0,0,0,0.2)",
        "large-right-invisible": "36px 0 46px rgb(0,0,0,0)",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      zIndex: {
        60: "60",
      },
      gap: {
        68: "272px",
      },
    },
  },
  plugins: [],
};

export default config;

// Useful tailwind intellisense regex
// https://github.com/paolotiu/tailwind-intellisense-regex-list
