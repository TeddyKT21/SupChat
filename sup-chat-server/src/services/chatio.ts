import socketio from "socket.io";
import { Sup } from "../repository/Sup.js";
import { Chat } from "../models/chat.js";

//events name
const newChatEventName = "newChat";
const newMessageEventName = "newMessage";

async function newChat(socket) {
  console.log(socket.id);
  socket.on("message", (message, room) => {
    if (room === "") {
      socket.broadcast.emit("message", message);
      console.log(message);
    } else {
      socket.to(room).emit("message", message);
    }
  });
}

async function newMessage() {}

const chatEvents = {functions:[newChat, newMessage],
  eventNames: [newChatEventName, newMessageEventName]};   


export default chatEvents;
