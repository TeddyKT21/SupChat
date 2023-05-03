import { Chat } from "src/schemas/chat.js";
import { Message } from "src/schemas/message.js";
import { User } from "src/schemas/user.js";

const fetchAllUsers = async (req,res) => {
    const users = await User.find({});
    res.send(JSON.stringify(users));
};

const fetchAllMessages = async (req, res) => {
  const messages = await Message.find({});
  res.send(JSON.stringify(messages));
};

const fetchAllChats = async (req, res) => {
  const chats = await Chat.find({});
  res.send(JSON.stringify(chats));
};

module.exports = {
    fetchAllUsers,
    fetchAllMessages,
    fetchAllChats,
}