import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.json",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        "bg-alt": "#F7F6F3",
        ink: "#141414",
        accent: "#A8862B",
        "accent-dark": "#8A6E22",
        line: "#E5E5E5",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
        "soft-lg": "0 8px 30px rgba(0,0,0,0.07)",
      },
      borderRadius: {
        card: "8px",
        btn: "4px",
      },
      maxWidth: {
        section: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
