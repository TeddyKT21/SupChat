import mongoose, { Schema, Document } from 'mongoose';

// Define interface for the document
export interface IUser extends Document {
  friends: [];
  chats: [];
  messages: [];
  username: string;
  email: string;
  password: string;
}

// Define the schema
const UserSchema: Schema = new Schema({
  friends: [{ friend: { type: Object, required: true } }],
  chats: [{ chat: { type: Object, required: true } }],
  messages: [{ message: { type: Object, required: true } }],
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
});

// Define and export the model
export const User = mongoose.model<IUser>('User', UserSchema);
