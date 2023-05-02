import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signUp";
import { Chats } from "./pages/chats";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/chats" element={<Chats />} />
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
