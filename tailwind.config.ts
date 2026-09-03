import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0E14",
        surface: "#12161F",
        surfaceHi: "#1A2029",
        line: "#262C38",
        ink: "#F1F3F6",
        inkDim: "#8F98A8",
        teal: "#4C86D6",
        tealLight: "#6FA0E6",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
