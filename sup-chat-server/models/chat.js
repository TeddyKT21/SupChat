const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chatSchema = new Schema({
  participants: [{ participant: { type: Object, required: true } }],
  messages: [{ message: { type: Object, required: true } }],
  admins: [{ type: Object, required: true }],
  name: { type: String, required: true },
  description: { type: String },
});

module.exports = mongoose.model("Chat", chatSchema);
