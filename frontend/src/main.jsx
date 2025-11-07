import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </React.StrictMode>
);
