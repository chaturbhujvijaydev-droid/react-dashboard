import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/styles/_variables.scss";
import "./assets/styles/light.scss";
import "./assets/styles/dark.scss";
import "./assets/styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>
);