import { Line, Saparate,Rows } from "../../../Layouts/Line/Line"
import GroupsIcon from '@mui/icons-material/Groups';
import "./ChatCard.css";

export const ChatCard = (chat) => {
    const lastMessage = chat.messages?.slice(-1)[0]? chat.messages?.slice(-1)[0] : {dateTime: new Date(), text: ''};
    const date =  new Date(lastMessage.dateTime)
    const timeStr = date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false});

    return (
        <div className="ChatCard">
            <Rows>
                <Saparate>
                    <Line>
                        <div className="image">
                            <GroupsIcon/>
                        </div>
                        <div>{chat.name}</div>
                    </Line>
                    <div>{timeStr}</div>
                </Saparate>
                <div>{lastMessage.text}</div>
            </Rows>
        </div>
    )
}