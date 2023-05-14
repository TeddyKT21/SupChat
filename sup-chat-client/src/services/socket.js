import { io } from "socket.io-client";
import { store } from "../store/index";
import { sendMessage, setChat } from "../store/chatSlice";

const URL = "http://localhost:8080/chats";

const socket = io(URL, {
  transports: ["websocket"],
  autoConnect: false,
});

socket.on("message", (message) => {
  store.dispatch(sendMessage(message));
});

socket.on("userList", (userList) => {
  const currentChat = store.getState().chatSlice.chat;
  store.dispatch(setChat({ ...currentChat, userList }));
});

export const connectSocket = (username) => {
  if (!socket.connected) {
    socket.auth = { username };
    socket.connect();
  }
};

export const disconnectSocket = () => {
  if (socket.connected) {
    socket.disconnect();
  }
};

export const addMessage = (message) => {
  if (socket.connected) {
    socket.emit("message", message);
  }
};

export default socket;
