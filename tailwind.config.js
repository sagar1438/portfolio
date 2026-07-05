/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F8F7F4",
        ink: "#1F1F1F",
        slate: "#5F6368",
        navy: {
          DEFAULT: "#1E3A5F",
          light: "#2F4E77",
        },
        line: "#E5E5E5",
        dark: {
          bg: "#111111",
          text: "#F5F5F5",
          sub: "#9A9A96",
          navy: "#5D7DA3",
          line: "#2A2A2A",
          surface: "#161616",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) forwards",
      },
    },
  },
  plugins: [],
};
