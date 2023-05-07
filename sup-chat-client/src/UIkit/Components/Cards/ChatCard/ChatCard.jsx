import { Line, Saparate,Rows } from "../../../Layouts/Line/Line"
import GroupsIcon from '@mui/icons-material/Groups';

export const ChatCard = (chat) => {
    const lastMessage = chat.messages?.slice(-1);
    console.log(lastMessage);
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
                    <div>{lastMessage.dateTime}</div>
                </Saparate>
                <div>{lastMessage.text}</div>
            </Rows>
        </div>
    )
}