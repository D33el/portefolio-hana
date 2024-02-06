import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#0a192f",
      primary: "#64ffda",
      secondary: "#112240",
      secondaryLight: "#233554",
      text: "#8892b0",
      heading: "#ccd6f6",
    },
  },
  plugins: [],
};
export default config;
