import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Instrument Serif", "Georgia", "serif"],
      },
      colors: {
        background: "#050505",
        surface: "#0B0B0B",
        card: "#111111",
        primaryText: "#F5F5F5",
        mutedText: "#8B8B8B",
        glow: "rgba(79,172,254,0.35)",
      },
      boxShadow: {
        glow: "0 0 42px rgba(79,172,254,0.24)",
        soft: "0 18px 70px rgba(0,0,0,0.5)",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(90deg, #4FACFE 0%, #00F2FE 100%)",
        "radial-grid":
          "radial-gradient(circle at center, rgba(79,172,254,0.13), transparent 42%)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
