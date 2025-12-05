import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 🔑 Define a fallback value for the token
  define: {
    // Vite expects the value to be a JSON string, so use double quotes
    __WS_TOKEN__: '""',
  },
});
