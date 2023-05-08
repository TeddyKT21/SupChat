import { Chat } from "../schemas/chat.js";
import { Message } from "../schemas/message.js";
import { User } from "../schemas/user.js";
export const fetchAllUsers = async (req, res) => {
    try {
        const users = await User.find().populate('friends chats messages');
        res.send(JSON.stringify(users));
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
};
export const fetchAllMessages = async (req, res) => {
    try {
        const messages = await Message.find().populate('user');
        res.send(JSON.stringify(messages));
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
};
export const fetchAllChats = async (req, res) => {
    try {
        /* const chats = await Chat.find().populate('participants messages admins'); */
        const chats = await Chat.find()
            .populate('participants')
            .populate('admins')
            .populate({
            path: 'messages',
            populate: {
                path: 'user',
                model: 'User'
            }
        });
        res.send(JSON.stringify(chats));
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
};
//# sourceMappingURL=data.js.map