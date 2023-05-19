import { Sup } from "../repository/Sup.js";
import { Message } from "../schemas/message.js";
const Dal = new Sup();
//events name
const newChatEventName = "newChat";
const leaveChatEventName = "leaveChat";
const newMessageEventName = "message";
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
// const newChat = async (io: Server): Promise<void> => {
//   io.on("connection", (socket: Socket) => {
//     socket.on("joinRoom", (room: string) => {
//       socket.join(room);
//       console.log(`User with ID: ${socket.id} joined room: ${room}`);
//     });
//   });
// };
// const leaveChat = async (io: Server): Promise<void> => {
//   io.on("connection", (socket: Socket) => {
//     socket.on("leaveRoom", (room: string) => {
//       socket.leave(room);
//       console.log(`User with ID: ${socket.id} left room: ${room}`);
//     });
//   });
// };
const newMessage = async (data, io) => {
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
    io.to(chat_id).emit('message', newMessage);
};
const chatEvents = {
    functions: [newMessage],
    eventNames: [newMessageEventName],
};
export default chatEvents;
//# sourceMappingURL=chatio.js.map