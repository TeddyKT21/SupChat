import { Line } from "../Line/Line"
import { SideBar } from "../../Components/SideBar/SideBar"
import { ChatArea } from "../../Components/ChatArea/ChatArea"
import {ChatCard} from "../../Components/Cards/ChatCard/ChatCard"

export const ChatLayout = () => {
    return (
        <div className="ChatLayout">
            <Line>
                <SideBar/>
                <ChatArea messages={[]}/>
            </Line>
        </div>
    )
}