import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  //@ configuration of proxy in the vite
  server: {
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
  plugins: [react()],
});
