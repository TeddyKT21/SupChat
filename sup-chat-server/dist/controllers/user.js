import { Sup } from "../repository/Sup.js";
import { User } from "../schemas/user.js";
import { Chat } from "../schemas/chat.js";
const Dal = new Sup();
export async function login(request, response) {
    try {
        const { email, password } = request.body;
        const foundUser = await Dal.userRep.findByEmail(email);
        const IsValid = !(foundUser == null || foundUser.password != password);
        console.log('user login: ', foundUser);
        console.log('a chat:', foundUser.chats[0].messages);
        IsValid ? response.send(foundUser) : response.sendStatus(404);
    }
    catch (error) {
        console.log("Login error:", error);
        response.redirect('login');
    }
}
;
export async function signUp(request, response) {
    try {
        console.log("body:", request.body);
        const { email, username, password } = request.body;
        console.log("email:", email, "username:", username, "password:", password);
        const newUser = new User({ email, username, password });
        const signUpUser = await Dal.userRep.add(newUser);
        response.sendStatus(201);
    }
    catch (error) {
        console.log("signUp error:", error);
        response.redirect('signUp');
    }
}
export async function addContact(request, response) {
    console.log('adding a contact...');
    console.log("body:", request.body);
    const updatedUserData = request.body;
    const updatedUser = await Dal.userRep.getById(updatedUserData._id);
    updatedUser.friends = updatedUserData.friends;
    await Dal.userRep.update(updatedUser._id, updatedUser);
    response.status(202).send('user updated');
}
export async function addChat(request, response) {
    console.log('adding a Chat...');
    console.log("body:", request.body);
    const newChatData = request.body;
    const newChat = new Chat({ ...newChatData });
    await Dal.chatRep.add(newChat);
    newChatData.participants.forEach(async (pData) => {
        const user = await Dal.userRep.getById(pData._id);
        user.chats.push(newChat);
        await Dal.userRep.update(user._id, user);
    });
    response.status(202).send('chat updated');
}
//# sourceMappingURL=user.js.map