import {MainLayout} from "../UIkit/Layouts/MainLayout/MainLayout";
import { SideBar } from "../UIkit/Components/SideBar/SideBar";
import { LayoutLine } from "../UIkit/Layouts/Line/Line";
import { ChatArea } from "../UIkit/Components/ChatArea/ChatArea";
import { ChatCard } from "../UIkit/Components/Cards/ChatCard/ChatCard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectToken } from "../store/userSlice";
import "./PageStyles/chat.css";


export const Chats = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const token = useSelector(selectToken);

  // useEffect(() => {
  //   // Check if the token is empty or undefined
  //   console.log("In Check Token");
  //   if (!token) {
  //     // Redirect to the login page
  //     console.log("In Check Token: NOOO Token!!!!!!!");
  //     navigate("/login");
  //   }
  // }, [token, navigate]);
  
  return (
    <div className="chats">
      <LayoutLine>
        <SideBar />
        <ChatArea />
      </LayoutLine>
    </div>
  );
}