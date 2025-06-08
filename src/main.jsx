// src/main.jsx

// Import React and ReactDOM to render the application.
import React from "react";
import ReactDOM from "react-dom/client";
// Import the main App component.
import App from "./App.jsx";
// Import the global stylesheet.
import "./index.css";
// Import HelmetProvider for managing SEO and document head tags.
import { HelmetProvider } from "react-helmet-async";

// Use ReactDOM to create a root render node and render the App.
ReactDOM.createRoot(document.getElementById("root")).render(
  // React.StrictMode is a tool for highlighting potential problems in an application.
  <React.StrictMode>
    {/* HelmetProvider provides context for react-helmet-async to work. */}
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);
