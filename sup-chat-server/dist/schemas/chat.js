import mongoose, { Schema } from "mongoose";
// Define the schema
const ChatSchema = new Schema({
    participants: [{ participant: { type: Object, required: true } }],
    messages: [{ message: { type: Object, required: true } }],
    admins: [{ type: Object, required: true }],
    name: { type: String, required: true },
    description: { type: String },
});
// Define and export the model
export const Chat = mongoose.model("Chat", ChatSchema);
//# sourceMappingURL=chat.js.map