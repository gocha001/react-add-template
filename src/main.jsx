import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import "modern-normalize";
import App from "./App.jsx";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
