import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname),
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      "@lib": path.resolve(__dirname, "../dist")
    }
  }
});