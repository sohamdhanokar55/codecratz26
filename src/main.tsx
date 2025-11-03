import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { setupGlobalErrorHandling, DebugLogger } from "./utils/debug";

// Import FontAwesome configuration
import "./lib/fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css';

// Setup global error handling for debugging
setupGlobalErrorHandling();

// Log app initialization in development
DebugLogger.log("App initializing...", {
  environment: import.meta.env.MODE,
  dev: import.meta.env.DEV,
  timestamp: new Date().toISOString(),
});

// Enable React DevTools in development
if (import.meta.env.DEV) {
  // @ts-ignore
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.__REACT_DEVTOOLS_GLOBAL_HOOK__ || {};
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
