import { io } from "socket.io-client";
import { store } from "../store/index";
import { sendMessage, setSelectedChat } from "../store/userSlice";

const URL = "http://localhost:8080/";

const socket = io(URL, {
  transports: ["websocket"],
  autoConnect: false,
});

socket.on("message", (message) => {
  store.dispatch(sendMessage(message));
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

export const addMessage = (message) => {
  if (socket.connected) {
    socket.emit("message", message);
  }
};

export default socket;
