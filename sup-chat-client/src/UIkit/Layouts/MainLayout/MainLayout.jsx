import { LayoutLine } from "../Line/Line";
import { SideBar } from "../../Components/SideBar/SideBar"
import { ChatArea } from "../../Components/ChatArea/ChatArea"
import { ChatCard } from "../../Components/Cards/ChatCard/ChatCard"
import "./MainLayout.css";


export const MainLayout = ({url,cardType,}) => {
    return (
      <div className="MainLayout">
        <LayoutLine>
          <SideBar url="data/chats" cardType={ChatCard} />
          <ChatArea messages={[]} />
        </LayoutLine>
      </div>
    );
}