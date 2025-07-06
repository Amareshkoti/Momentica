import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "@/context/AuthContext";
import { QueryProvider } from "@/lib/react-query/QueryProvider";

import App from "./App";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

try {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <QueryProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </QueryProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
} catch (error) {
  console.error("Failed to render app:", error);
  // Fallback to basic HTML if React fails
  root.innerHTML = `
    <div style="min-height: 100vh; background: #000; color: white; display: flex; align-items: center; justify-content: center;">
      <div style="text-align: center;">
        <h1 style="font-size: 2rem; margin-bottom: 1rem;">Snapgram</h1>
        <p style="color: #7878a3; margin-bottom: 1rem;">Failed to load application</p>
        <p style="font-size: 0.875rem; color: #5c5c7b;">Check console for errors</p>
      </div>
    </div>
  `;
}
