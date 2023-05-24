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
import { useSelector } from "react-redux";
import { useEffect } from "react";



export const Chats = () => {

    return (
      <div className="chats">
        <LayoutLine>
          <SideBar />
          <ChatArea />
        </LayoutLine>
      </div>
    );
}