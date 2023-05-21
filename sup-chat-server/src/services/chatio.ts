import { Sup } from "../repository/Sup.js";
import { Chat } from "../schemas/chat.js";
import { Server, Socket } from "socket.io";
import { Message } from "../schemas/message.js";

const Dal = new Sup();

//events name
const newMessageEventName: string = "message";
const joinRoomEventName: string = "joinRoom";
const leaveRoomEventName: string = "leaveRoom";
const addToRoomEventName: string = "addToRoom";
const removeFromRoomEventName: string = "removeFromRoom";
const createChatEventName: string = "newChat";

const remove = (array:Array<any>, item: any) => {
  const index = array.indexOf(item);
  if (index > -1){
    array.splice(index, 1);
  }
}


const newMessage = async (data: any, io: Server, socket: Socket) => {
  console.log(`new message recived: ${data.message}`);
  const { message: messageData, chat_id } = data;
  const newMessage = new Message({
    text: messageData.text,
    dateTime: messageData.dateTime,
    user: messageData.user._id,
  });
  await Dal.messageRep.add(newMessage);
  const chat = await Dal.chatRep.getById(chat_id);
  chat.messages.push(newMessage);
  Dal.chatRep.update(chat_id, chat);
  socket.broadcast.to(chat_id).emit("message", data);

};

const joinRoom = async (room_id: any, io: Server, socket: Socket) => {
  socket.join(room_id);
};
const leaveRoom = async (room_id: any, io: Server, socket: Socket) => {
  socket.leave(room_id);
};

const addToRoom = async (data: any, io: Server, socket: Socket) => {
  const {chat_id, user_id} = data;
  const chat = await Dal.chatRep.getById(chat_id);
  const user = await Dal.userRep.getById(user_id);
  chat.participants.push(user);
  user.chats.push(chat);
  await Dal.chatRep.update(chat._id,chat);
  await Dal.userRep.update(user._id,user);
  socket.broadcast.to(chat_id).emit("addToRoom", user);
};

const removeFromRoom =async (data: any, io: Server, socket: Socket) => {
  const {chat_id, user_id} = data;
  const chat = await Dal.chatRep.getById(chat_id);
  const user = await Dal.userRep.getById(user_id);
  remove(chat.participants,user);
  remove(chat.admins,user);
  remove(user.chats, chat);
  await Dal.chatRep.update(chat._id,chat);
  await Dal.userRep.update(user._id,user);
  socket.broadcast.to(chat_id).emit("removeFromRoom", user);
}

const createChat = async (data: any, io: Server, socket: Socket) => {
  const newChat = new Chat({...data});
  await Dal.chatRep.add(newChat);
  newChat.participants.forEach(async (p) => {
    const user = await Dal.userRep.getById(p._id);
    user.chats.push(newChat);
    await Dal.userRep.update(user._id,user);
  });
  newChat.participants.forEach(async (u) => {
    const socketIdArr = await io.in(u._id).fetchSockets()
    if (socketIdArr){
      const socketId = await io.in(u._id).fetchSockets()[0];
      socketId && io.to(socketId).emit("newChat", newChat);
    }
  });
}


const chatEvents = {
  functions: [newMessage, joinRoom, leaveRoom, addToRoom,removeFromRoom,createChat],
  eventNames: [
    newMessageEventName,
    joinRoomEventName,
    leaveRoomEventName,
    addToRoomEventName,
    removeFromRoomEventName,
    createChatEventName
  ],
};

export default chatEvents;
