import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signUp";
import { Chats } from "./pages/chats";
import { Logout } from "./pages/logout";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<App />}>
        <Route path="/chats" element={<Chats />} />
        {/* <Route path="/addChat" element={<AddChat/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="*" element={<PageNotFound />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);
