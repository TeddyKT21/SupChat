import { Line, Saparate,Rows } from "../../Layouts/Line/Line";
import "./ChatInfo.css";

export const ChatInfo = (chat) => {
   chat = chat.chat;
    return (
        <div className={`chatInfo`}>
            <Rows>  
                <Line>
                    <h1>chat name: {chat.name}</h1>
                    <div>description:{chat.description} </div>
                </Line>
                <Saparate>
                    <div>participants:{chat.participants}</div>
                    <div>created at :{chat.createdAt}</div>
                </Saparate>
            </Rows>
        </div>
    )
}