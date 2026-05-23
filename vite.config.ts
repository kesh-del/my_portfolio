import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2022",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ["framer-motion", "gsap", "@gsap/react"],
          three: ["three"],
          vendor: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
});
