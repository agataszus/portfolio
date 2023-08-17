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
    fontFamily: {
      main: "Poppins",
    },
    extend: {
      colors: {
        primary: "#95FAFE",
        "background-color-dark": "#0D0E38",
        "background-color-light": "#293868",
        "font-color-light": "#FFFFFF",
      },
    },
  },
  plugins: [],
};

export default config;
