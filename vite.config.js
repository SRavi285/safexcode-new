import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],
  server: {
    host: true, // Allows access via your local IP (e.g., on your phone)
    port: 5173, // Optional: you can change the port if needed
  },
});
