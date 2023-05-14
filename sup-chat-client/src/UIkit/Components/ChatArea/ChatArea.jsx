import { useSelector } from 'react-redux'; //useDispatch
import { useState, useEffect, Fragment } from "react";
import { Rows } from "../../Layouts/Line/Line";
import { MessageCard } from "../Cards/MessageCard/MessageCard";
import { Input } from "../Input/Input/Input";
import { Saparate } from "../../Layouts/Line/Line";
import { Button } from "../Button/Button";
//import { sendMessage } from "../../../store/chatSlice";
import { UseFetch } from "../../../CustomHooks/useFetch";
import { connectSocket,disconnectSocket,addMessage } from '../../../services/socket';
import "./ChatArea.css";

export const ChatArea = () => {
    //const dispatch = useDispatch();
    const chat = useSelector(state => state.chatSlice.chat) || {messages: []};
    const messages = useSelector(state => state.chatSlice.chat?.messages);
    const user = useSelector(state => state.authSlice.user);
    
    const [dateTime, setDateTime] = useState(null);
    const [text, setText] = useState('');
    const newMessage = ({user,text,dateTime,chat});
    
    UseFetch('messages/addNewMessage', 'post', newMessage,[dateTime],dateTime && text);
    console.log('newMessage: ',newMessage);
    const sendNewMessage = () =>{
        newMessage.dateTime = new Date();
        setDateTime(newMessage.dateTime);
        //dispatch(sendMessage(newMessage));
        addMessage(newMessage);
    }

    useEffect(() => {
        if(user){
            connectSocket(user.username);
        }

        return () => {
            disconnectSocket();
        }
    }, [user])

    return (
        <div className="chatArea">
            <div className='chatAreaContainer'>
                <Rows>
                    <h1>Chat Area</h1>
                    <h1>{chat.name}</h1>
                    <div className="list">
                        {messages?.map((message) => 
                        <Fragment key={message._id}>
                            <MessageCard message={message}/>
                        </Fragment>
                        )}
                    </div>
                    <form className='form'>
                        <Saparate>                       
                            <Input 
                            type={'text'} 
                            placeholder={'Write a new message...'} 
                            name={"newMessage"} 
                            onTextChange={(text) => setText(text)}
                            className="inputForm"/>
                            <Button onClick={sendNewMessage} className="buttonForm">Send</Button>
                        </Saparate>
                    </form>
                </Rows>
            </div>
        </div>    
    )
}