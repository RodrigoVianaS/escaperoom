import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css';
import "./global.css";
import { ProgressProvider } from "./progress/ProgressContext.jsx"; // se estiver usando progresso

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProgressProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProgressProvider>
  </React.StrictMode>
);


