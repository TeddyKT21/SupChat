import { Line, Saparate,Rows } from "../../../Layouts/Line/Line"
export const ChatCard = (chat) => {
    const lastMessage = chat.messages?.slice(-1).text 
    return (
        <div className="ChatCard">
            <Rows>
                <Saparate>
                <Line>
                    <div>*image placeholder*</div>
                    <div>{chat.name}</div>
                </Line>
                <div>{lastMessage.dateTime}</div>
                </Saparate>
                <div>{lastMessage.text}</div>
            </Rows>
        </div>
    )
}