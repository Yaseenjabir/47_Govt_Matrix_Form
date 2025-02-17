import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // Listen on all network interfaces
    port: 5173, // Optional: specify the port number (default is 5173)
    open: true, // Optional: automatically open the browser
  },
});
