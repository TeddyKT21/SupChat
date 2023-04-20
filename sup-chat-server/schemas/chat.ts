import { Schema, model } from 'mongoose';

const chatSchema = new Schema({
    participants: [{ participant: { type: Object, required: true } }],
  messages: [{ message: { type: Object, required: true } }],
  admins: [{ type: Object, required: true }],
  name: { type: String, required: true },
  description: { type: String },
});

export const ChatSchema = model('Chat', chatSchema);