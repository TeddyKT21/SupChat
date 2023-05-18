import { useSelector , useDispatch} from 'react-redux';
import { useState, useEffect, Fragment } from "react";
import { Rows } from "../../Layouts/Line/Line";
import { Input } from "../Input/Input/Input";
import { Saparate } from "../../Layouts/Line/Line";
import { Button } from "../Button/Button";
import { sendMessage } from "../../../store/userSlice";
import { UseFetch } from "../../../CustomHooks/useFetch";
import { connectSocket,disconnectSocket } from '../../../services/socket';
import { MessageList } from '../MessageList/MessageList';
import "./ChatArea.css";

export const ChatArea = () => {
    const dispatch = useDispatch();
    const chat = useSelector(state => state.userSlice.selectedChat) || {messages: []};
    const messages = useSelector(state => state.userSlice.selectedChat?.messages);
    const user = useSelector(state => state.userSlice.user);
    const [dateTime, setDateTime] = useState(null);
    const [text, setText] = useState('');
    const newMessage = ({user,text,dateTime,chat});
    
    UseFetch('messages/addNewMessage', 'post', newMessage,[dateTime],dateTime && text);
    console.log('newMessage: ',newMessage);
    const sendNewMessage = () =>{
        newMessage.dateTime = Date.now();
        dispatch(sendMessage(newMessage));
        setDateTime(newMessage.dateTime);
        setText('');
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
        <div className="chatAreaContainer">
          <Rows>
            <h1>{chat.name ? chat.name : "Chat Area"}</h1>
            <MessageList messages={messages}/>
            <form className="form">
              <Saparate>
                <Input
                  type={"text"}
                  placeholder={"Write a new message..."}
                  name={"newMessage"}
                  onTextChange={(text) => setText(text)}
                  value={text}
                  className="inputForm"
                />
                <Button onClick={sendNewMessage} className="buttonForm">
                  Send
                </Button>
              </Saparate>
            </form>
          </Rows>
        </div>
      </div>
    );
}