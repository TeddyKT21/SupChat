import { io } from "socket.io-client";
import { store } from "../store/index";
import {
  addNewChat,
  reciveMessage,
  sendMessage,
  setSelectedChat,
} from "../store/userSlice";
const URL = require("../URL.json").url;

const socket = io(URL, {
  transports: ["websocket"],
  autoConnect: false,
});

export const emitMessage = (message, chat) => {
  if (message.text.trim !== "") {
    socket.emit("message", { chat_id: chat._id, message: message });
  }
};

export const emitNewChat = (chat) => socket.emit("newChat", chat);

const listenToMessages = () =>
  socket.on("message", (data) => store.dispatch(reciveMessage(data)));

const listenToNewChats = () =>
  socket.on("newChat", (data) => store.dispatch(addNewChat(data)));

export const connectSocket = (user) => {
  if (!socket.connected) {
    const username = user.username;
    socket.auth = { username };
    socket.connect();
    console.log("connecting to the server...");
    user.chats.forEach((chat) => socket.emit("joinRoom", chat._id));
    socket.on('connect', () => {
      socket.emit("subscribe", user._id);
      listenToMessages();
      listenToNewChats();
    });
  }
};

export const leaveChatRoom = (chat) => socket.emit("leaveRoom", chat._id);

export const removeFromChatRoom = (chat, user) =>
  socket.emit("removeFromRoom", { chat_id: chat._id, user_id: user._id });

export const addToRoom = (chat, user) =>
  socket.emit("addToRoom", { chat_id: chat._id, user_id: user._id });

export const disconnectSocket = () => {
  if (socket.connected) {
    socket.disconnect();
  }
};

export default socket;
