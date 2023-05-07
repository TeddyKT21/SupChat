import mongoose, { Schema } from 'mongoose';
// Define the schema
const UserSchema = new Schema({
    friends: [{ friend: { type: Object, required: true } }],
    chats: [{ chat: { type: Object, required: true } }],
    messages: [{ message: { type: Object, required: true } }],
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    imageUrl: { type: String },
});
// Define and export the model
export const User = mongoose.model('User', UserSchema);
//# sourceMappingURL=user.js.map