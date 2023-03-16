import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./Context/auth";
import { Router } from "./Routes/router";
import { GlobalStyle } from "./Styles/global";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <Router />
          <ToastContainer />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}
