import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    friends: [{ friend: { type: Object, required: true } }],
    chats: [{ chat: { type: Object, required: true } }],
    messages: [{ message: { type: Object, required: true } }],
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
});
export const UserSchema = model("User", userSchema);
//# sourceMappingURL=user.js.map