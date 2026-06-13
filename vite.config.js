import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Deployed as a GitHub user site at https://ziqihuang.github.io/ (served at
// the domain root), so base is "/". Output goes to /docs because GitHub Pages
// is configured to publish from the main branch /docs folder.
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
  server: {
    port: 5174,
  },
});
