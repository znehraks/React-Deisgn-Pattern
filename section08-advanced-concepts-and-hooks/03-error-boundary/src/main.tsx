import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { ErrorBoundary } from "./CustomErrorBoundary.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<h1>Error at App level</h1>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
