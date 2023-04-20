const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  friends: [{ friend: { type: Object, required: true } }],
  chats: [{ chat: { type: Object, required: true } }],
  messages: [{ message: { type: Object, required: true } }],
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("User", userSchema);
