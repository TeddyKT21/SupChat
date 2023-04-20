let Message = require("../models/message");

async function addMessage(messageData) {
  const message = new Message({
    user: messageData.user,
    text: messageData.text,
    dateTime: new Date(),
  });

  await message.save();
}

async function getMessages() {
  return await Message.find();
}

module.exports = { add: addMessage, get: getMessages };
