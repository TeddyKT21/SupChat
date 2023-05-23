import {MainLayout} from "../UIkit/Layouts/MainLayout/MainLayout";
import { SideBar } from "../UIkit/Components/SideBar/SideBar";
import { LayoutLine } from "../UIkit/Layouts/Line/Line";
import { ChatArea } from "../UIkit/Components/ChatArea/ChatArea";
import { ChatCard } from "../UIkit/Components/Cards/ChatCard/ChatCard";
import "./PageStyles/chat.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { connectSocket, disconnectSocket } from "../services/socket";

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