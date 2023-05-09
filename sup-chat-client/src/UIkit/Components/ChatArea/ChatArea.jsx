import { useSelector,useDispatch } from 'react-redux';
import { useRef, useState } from "react";
import { Rows } from "../../Layouts/Line/Line";
import { MessageCard } from "../Cards/MessageCard/MessageCard";
import { Input } from "../Input/Input/Input";
import { Saparate } from "../../Layouts/Line/Line";
import { Button } from "../Button/Button";
import { sendMessage } from "../../../store/chatSlice";
import { setMessageText } from '../../../store/messageSlice';
import { UseFetch } from "../../../CustomHooks/useFetch";
import "./ChatArea.css";

export const ChatArea = () => {
    const dispatch = useDispatch();
    const chat = useSelector(state => state.chatSlice.chat) || {messages: []};
    const loggedInUser = useSelector(state => state.authSlice.user);
    const currentChat = useSelector(state =>state.chatSlice.chat);
    const messageObj = {
        user:loggedInUser,
        text: '',
        dateTime: null,
        chat: currentChat
    }
    const [isAddMessage, setIsAddMessage] = useState(false);
    const newMessage = useRef(messageObj);
    UseFetch('messages/addNewMessage', 'post', newMessage.current,[isAddMessage],isAddMessage);
    console.log('current message: ',newMessage.current);
    const sendNewMessage = () =>{
        newMessage.current.dateTime = new Date();
        dispatch(sendMessage({...newMessage.current}));
        setIsAddMessage(true);
        newMessage.current.text = '';
    }

    return (
        <div className="chatArea">
            <Rows>
                <h1>Chat Area</h1>
                {chat.messages.map((message) => 
                    <MessageCard key={message._id} message={message}/>
                )}
                <form>
                    <Saparate>                       
                        <Input 
                        type={'text'} 
                        placeholder={'Write a new message...'} 
                        name={"newMessage"} 
                        onTextChange={(text) => newMessage.current.text = text}/>
                        <Button onClick={sendNewMessage}>Send</Button>
                    </Saparate>
                </form>
            </Rows>
        </div>
        
    )
}