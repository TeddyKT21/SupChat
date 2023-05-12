import { Sup } from "../repository/Sup.js";
import { Message } from "../schemas/message.js";
const Dal = new Sup();
export async function addMessage(request, response) {
    console.log('adding a message...');
    const newMessageData = request.body;
    console.log("newMessageData:", request.body);
    const newMessage = new Message({
        text: newMessageData.text,
        dateTime: newMessageData.dateTime,
        user: newMessageData.user._id
    });
    await Dal.messageRep.add(newMessage);
    console.log("New Message Data:", newMessageData);
    const Chat = await Dal.chatRep.getById(newMessageData.chat._id);
    Chat.messages.push(newMessage);
    Dal.chatRep.update(Chat._id, Chat);
    response.status(201).send('message sent to server');
}
//# sourceMappingURL=msg.js.map