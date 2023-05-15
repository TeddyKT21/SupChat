import socketio from "socket.io";
import { Sup } from "../repository/Sup.js";
import { Chat } from "../models/chat.js";
import { Server, Socket } from 'socket.io';
import { server } from "typescript";

//events name
const newChatEventName: string = "newChat";
const leaveChatEventName: string = "leaveChat";
const newMessageEventName: string = "newMessage";

// async function newChat(socket) {
//   console.log(socket.id);
//   socket.on("message", (message, room) => {
//     if (room === "") {
//       socket.broadcast.emit("message", message);
//       console.log(message);
//     } else {
//       socket.to(room).emit("message", message);
//     }
//   });
// }

const newChat = async(io:Server): Promise<void> =>{
  io.on("connection",(socket: Socket) => {
    socket.on("joinRoom", (room: string) => {
      socket.join(room);
      console.log(`User with ID: ${socket.id} joined room: ${room}`);
    })
  })
}

const leaveChat = async(io: Server): Promise<void> => {
  io.on("connection", (socket: Socket) => {
    socket.on("leaveRoom", (room: string) => {
      socket.leave(room);
      console.log(`User with ID: ${socket.id} left room: ${room}`);
    });
  });
}

async function newMessage() {}

const chatEvents = {
  functions:[newChat,leaveChat, newMessage],
  eventNames: [newChatEventName,leaveChatEventName, newMessageEventName]
};   

export default chatEvents;
