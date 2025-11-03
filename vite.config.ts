import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Enable CORS for external browsers
    cors: true,
    // Open browser automatically (can be disabled if using external browser)
    open: false,
    // Enable HMR for better debugging
    hmr: {
      port: 8081,
    },
  },
  plugins: [
    react({
      // Enable React DevTools in development
      devTarget: mode === "development" ? "esnext" : "es2015",
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Enhanced debugging configuration
  build: {
    // Generate source maps for better debugging
    sourcemap: mode === "development" ? "inline" : false,
    // Keep original file names for easier debugging
    minify: mode === "development" ? false : "esbuild",
  },
  // Enable detailed error overlay
  define: {
    __DEV__: mode === "development",
  },
  // Optimize dependencies for debugging
  optimizeDeps: {
    include: ["react", "react-dom"],
    // Force pre-bundling of these packages for consistent debugging
    force: mode === "development",
  },
}));
