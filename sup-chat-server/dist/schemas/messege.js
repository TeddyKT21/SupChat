import { Schema, model } from 'mongoose';
const messageSchema = new Schema({
    user: { type: Object, required: true },
    text: { type: String, required: true },
    dateTime: { type: Date, required: true },
});
export const MessageSchema = model("Message", messageSchema);
//# sourceMappingURL=messege.js.map