import { LayoutLine } from "../Line/Line";
import { SideBar } from "../../Components/SideBar/SideBar";
import { ChatArea } from "../../Components/ChatArea/ChatArea";
import { ChatCard } from "../../Components/Cards/ChatCard/ChatCard";
import { Button } from "../../Components/Button/Button";
import "./MainLayout.css";
import { useEffect, useState } from "react";
import { AddChat } from "../../../pages/addChat";
import { useSelector } from "react-redux";
import { connectSocket, disconnectSocket } from "../../../services/socket";

export const MainLayout = () => {
  const [addChatForm, setAddChatForm] = useState(false);
  const user = useSelector((state) => state.userSlice.user);
  useEffect(() => {
    if (user) {
      connectSocket(user);
    }

    return () => {
      disconnectSocket();
    };
  }, [user]);
  return (
    <div className="MainLayout">
      <Button onClick={() => setAddChatForm(!addChatForm)} className="addBtn">
        {addChatForm ? "<" : "+"}
      </Button>
      <LayoutLine>
        {addChatForm ? <AddChat /> : <SideBar />}
        <ChatArea messages={[]} />
      </LayoutLine>
    </div>
  );
};
