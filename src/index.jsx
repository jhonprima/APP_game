import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Import komponen App
import "./styles.css"; // File CSS jika diperlukan

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
