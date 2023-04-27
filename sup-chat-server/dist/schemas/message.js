import mongoose, { Schema } from 'mongoose';
// Define the schema
const MessageSchema = new Schema({
    user: { type: Object, required: true },
    text: { type: String, required: true },
    dateTime: { type: Date, required: true },
});
// Define and export the model
export const Message = mongoose.model('Message', MessageSchema);
//# sourceMappingURL=message.js.map