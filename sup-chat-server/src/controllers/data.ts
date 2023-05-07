import { Chat } from "../schemas/chat.js";
import { Message } from "../schemas/message.js";
import { User } from "../schemas/user.js";

export const fetchAllUsers = async (req,res) => {
    const users = await User.find({});
    res.send(JSON.stringify(users));
};

export const fetchAllMessages = async (req, res) => {
  const messages = await Message.find({});
  res.send(JSON.stringify(messages));
};

export const fetchAllChats = async (req, res) => {
  const chats = await Chat.find({}).populate("participants.participant")
  .populate("messages.message")
  .populate("admins");
  res.send(JSON.stringify(chats));


};
