import { io } from "socket.io-client";
import { store } from "../store/index";
import { reciveMessage, sendMessage, setSelectedChat } from "../store/userSlice";
const URL = require('../URL.json').url;

const socket = io(URL, {
  transports: ["websocket"],
  autoConnect: false,
});

export const emitMessage = (message, chat) =>{
  if (message.text.trim !== ''){
    console.log(`emitting message: ${message}, in chat:${chat._id}`);
    socket.emit('message',{'chat_id':chat._id, 'message': message});
    if(!socket.connected){
      console.log('socket not connected !!!!!')
    }
    socket.emit('test','this is test');
  }
}

socket.on("message", (data) => {
  store.dispatch(reciveMessage(data));
});

socket.on("userList", (userList) => {
  const currentChat = store.getState().userSlice.selectedChat;
  store.dispatch(setSelectedChat({ ...currentChat, userList }));
});

export const connectSocket = (username) => {
  if (!socket.connected) {
    socket.auth = { username };
    socket.connect();
    console.log("connecting to the server...");
  }
};

export const disconnectSocket = () => {
  if (socket.connected) {
    socket.disconnect();
  }
};

// export const addMessage = (message) => {
//   if (socket.connected) {
//     socket.emit("message", message);
//   }
// };

export default socket;
