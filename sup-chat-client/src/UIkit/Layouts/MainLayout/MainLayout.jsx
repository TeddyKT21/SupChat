import { LayoutLine } from "../Line/Line";
import { SideBar } from "../../Components/SideBar/SideBar"
import { ChatArea } from "../../Components/ChatArea/ChatArea"
import { ChatCard } from "../../Components/Cards/ChatCard/ChatCard"
import { Button } from "../../Components/Button/Button";
import "./MainLayout.css";
import { useState } from "react";
import { AddChat } from "../../../pages/addChat";


export const MainLayout = ({url,cardType,}) => {
    const [addChatForm, setAddChatForm] = useState(false);

    return (
      <div className="MainLayout">
        <Button onClick={() => setAddChatForm(!addChatForm)} className="addBtn">
          {addChatForm ? "<" : "+"}
        </Button>
        <LayoutLine>
          {addChatForm ? <AddChat/> : <SideBar url="data/chats" cardType={ChatCard} />}
          <ChatArea messages={[]} />
        </LayoutLine>
      </div>
    );
}