import { forwardRef } from "react";
import { Line, Saparate,Rows } from "../../../Layouts/Line/Line";
import "./MessageCard.css";

export const MessageCard = forwardRef(({message, key, className}, ref) => {
    
    const date =  new Date(message.dateTime)
    const timeStr = date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false});
    return (
        <div className={`messageCard ${className}`} key={key} ref={ref}>
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
});