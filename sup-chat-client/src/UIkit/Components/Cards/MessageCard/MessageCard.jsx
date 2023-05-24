import { Line, Saparate,Rows } from "../../../Layouts/Line/Line";
import "./MessageCard.css";

export const MessageCard = (message, key, className) => {
    // console.log('rendeing message card ', message);

    message = message.message;
    const date =  new Date(message.dateTime)
    const timeStr = date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false});
    return (
        <div className={`messageCard ${className}`} key={key}>
            <Rows>  
                <Line>
                    <div>{message.user?.username}</div>
                    <div>{message.user?.email} </div>
                </Line>
                <Saparate>
                    <div>{message.text}</div>
                    <div>{timeStr}</div>
                </Saparate>
            </Rows>
        </div>
    )
}