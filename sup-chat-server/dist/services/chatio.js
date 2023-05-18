//events name
const newChatEventName = "newChat";
const leaveChatEventName = "leaveChat";
const newMessageEventName = "newMessage";
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
const newChat = async (io) => {
    io.on("connection", (socket) => {
        socket.on("joinRoom", (room) => {
            socket.join(room);
            console.log(`User with ID: ${socket.id} joined room: ${room}`);
        });
    });
};
const leaveChat = async (io) => {
    io.on("connection", (socket) => {
        socket.on("leaveRoom", (room) => {
            socket.leave(room);
            console.log(`User with ID: ${socket.id} left room: ${room}`);
        });
    });
};
async function newMessage() { }
const chatEvents = {
    functions: [newChat, leaveChat, newMessage],
    eventNames: [newChatEventName, leaveChatEventName, newMessageEventName]
};
export default chatEvents;
//# sourceMappingURL=chatio.js.map