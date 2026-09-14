import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    react(),

    legacy({
      targets: [
        "Chrome >= 60",
        "Android >= 8",
        "iOS >= 12",
        "Safari >= 12"
      ],
      modernPolyfills: true,
      renderLegacyChunks: true
    })
  ],

  build: {
    target: "es2015"
  },

  esbuild: {
    target: "es2015"
  }
});