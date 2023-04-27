import mongoose, { Schema, Document } from 'mongoose';

// Define interface for the document
export interface IMessage extends Document {
  user: object;
  text: string;
  dateTime: Date;
}

// Define the schema
const MessageSchema: Schema = new Schema({
  user: { type: Object, required: true },
  text: { type: String, required: true },
  dateTime: { type: Date, required: true },
});

// Define and export the model
export const Message = mongoose.model<IMessage>('Message', MessageSchema);