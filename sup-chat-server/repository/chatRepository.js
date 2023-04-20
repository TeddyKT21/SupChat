let Chat = require("../models/chat");

async function addChat(chatData) {
  const chat = new Chat({
    participants: chatData.participants,
    messages: [],
    admins: chatData.admins,
    name: chatData.name,
    description: chatData.description,
  });

  await chat.save();
}

async function getChats() {
  return await Chat.find();
}

module.exports = { add: addChat, get: getChats };
