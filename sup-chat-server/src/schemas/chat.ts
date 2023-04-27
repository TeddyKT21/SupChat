import mongoose, { Schema, Document } from "mongoose";

// Define interface for the document
export interface IChat extends Document {
  participants: [];
  messages: [];
  admins: [];
  name: string;
  description: string;
}

// Define the schema
const ChatSchema: Schema = new Schema({
  participants: [{ participant: { type: Object, required: true } }],
  messages: [{ message: { type: Object, required: true } }],
  admins: [{ type: Object, required: true }],
  name: { type: String, required: true },
  description: { type: String },
});

// Define and export the model
export const Chat = mongoose.model<IChat>("Chat", ChatSchema);