import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={window.location.pathname.startsWith("/cef_repo_2026") ? "/cef_repo_2026" : "/"}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
