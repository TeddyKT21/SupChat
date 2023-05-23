//seen and sent message
const seenEventName = "seen";
const sentEventName = "sent";
const typingEventName = "typing";
const stoppedTypingEventName = "stopped typing";
const typingUsersMap = new Map();
async function seen() { }
async function sent() { }
function typing(data, io, socket) {
    socket.on("typing", ({ chatId, userId }) => {
        console.log('Server received typing event', { chatId, userId });
        let typingUsers = typingUsersMap.get(chatId) || new Set();
        typingUsers.add(userId);
        typingUsersMap.set(chatId, typingUsers);
        socket.to(chatId).emit("typing", { userId, chatId });
    });
}
function stoppedTyping(data, io, socket) {
    socket.on("stopped typing", ({ chatId, userId }) => {
        console.log('Server received stopped typing event', { chatId, userId });
        let typingUsers = typingUsersMap.get(chatId) || new Set();
        typingUsers.delete(userId);
        if (typingUsers.size === 0) {
            typingUsersMap.delete(chatId);
        }
        else {
            typingUsersMap.set(chatId, typingUsers);
        }
        socket.to(chatId).emit("stopped typing", { userId, chatId });
    });
}
/* module.exports.functions = [seen, sent];
module.exports.eventNames = [seenEventName, sentEventName]; */
const messageEvents = { functions: [seen, sent, typing, stoppedTyping],
    eventNames: [seenEventName, sentEventName, typingEventName, stoppedTypingEventName] };
export default messageEvents;
//# sourceMappingURL=messageio.js.map