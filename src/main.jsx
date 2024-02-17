import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BalanceProvider } from "./context/BalanceContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BalanceProvider>
      <App />
    </BalanceProvider>
  </React.StrictMode>
);
