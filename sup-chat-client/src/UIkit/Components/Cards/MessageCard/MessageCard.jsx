import { Line, Saparate,Rows } from "../../../Layouts/Line/Line"
export const MessageCard = (message, group) => {
    
    return (
        <div>
            <Rows>
                {group && 
                <Line>
                    {message.user.username}
                    {message.user.email} 
                </Line>}
                <Saparate>
                    {message.text}
                    {message.dateTime}
                </Saparate>
            </Rows>
        </div>
    )
}