import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Reset } from "styled-reset";
import Router from "./router.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <BrowserRouter basename="/">
  // <Reset />

  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={Router} />
  </React.StrictMode>

  // </BrowserRouter>
);
