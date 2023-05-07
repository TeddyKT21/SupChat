import { Rows } from "../../Layouts/Line/Line";
import { MessageCard } from "../Cards/MessageCard/MessageCard"
import "./ChatArea.css"
export const ChatArea = ({messages}) => {
    return (
        <div className="chatArea">
            <Rows>
                <h1>Chat Area</h1>
                {messages.map(message => {
                    <MessageCard message={message}/>
                })}
            </Rows>
        </div>
        
    )
}