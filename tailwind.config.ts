import colors from "tailwindcss/colors";
import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";

export default {
  mode: "jit",
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#815AF0",
        "primary-dark": "#573DA3",
        comment: "#699856",
      },
      fontFamily: {
        mono: ["var(--font-jbmono)"],
      },
      transitionDuration: {
        "250": "250ms",
      },
      fontWeight: {
        semilight: "250",
      },
      translate: {
        "2full": "200%",
      },
      height: {
        "88": "22rem",
      },
      fontSize: {
        skilldescription: "7.5cqw",
      },
    },
  },
  plugins: [
    createThemes({
      light: {
        bg: colors.white,
        invertbg: "#1e1e1e",
      },
      dark: {
        bg: "#1e1e1e",
        invertbg: colors.white,
      },
    }),
  ],
} satisfies Config;
