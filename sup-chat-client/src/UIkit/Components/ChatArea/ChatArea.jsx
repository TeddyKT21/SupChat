import { Rows } from "../../Layouts/Line/Line";
import { MessageCard } from "../Cards/MessageCard/MessageCard"
export const ChatArea = ({messages}) => {
    return (
        <Rows>
            {messages.map(message => {
              <MessageCard message={message}/>
            })}
        </Rows>
    )
}