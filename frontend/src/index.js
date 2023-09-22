import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/users/:page" element={<App />} exact />
        <Route path="/*" element={<Navigate to="/users/1" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
