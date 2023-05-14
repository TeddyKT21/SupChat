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



/* {functions:[newChat, newMessage],
   eventNames: [newChatEventName, newMessageEventName]};    */
// module.exports.functions = [newChat, newMessage];
// module.exports.eventNames = [newChatEventName, newMessageEventName];

// socket.on("newItem", async (item) => {
//   try {
//     repository.add(item);
//     projects = await repository.get();

//     socket.emit("getData", projects);
//     socket.broadcast.emit("getData", projects);
//   } catch (error) {
//     socket.emit("error", "server error on add");
//   }
// });
