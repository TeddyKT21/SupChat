import { Sup } from "../repository/Sup.js";
import { User } from "../schemas/user.js";
import { Chat } from "../schemas/chat.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const Dal = new Sup();
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
        response.redirect("signUp");
    }
}
// function verifyToken(token, secret) {
//   try {
//     const decoded = jwt.verify(token, secret);
//     return decoded;
//   } catch (error) {
//     console.log("Token verification error:", error);
//     return null;
//   }
// }
// function getTokenFromHeader(request) {
//   const authorizationHeader = request.headers["authorization"];
//   if (authorizationHeader && authorizationHeader.startsWith("Bearer ")) {
//     // Extract the token part from the Authorization header
//     const token = authorizationHeader.substring(7);
//     return token;
//   }
//   return null; // Token not found in the header
// }
// export async function login (request, response) {
//   try {
//     const { email, password } = request.body;
//   const foundUser = await Dal.userRep.findByEmail(email);
//   const isPasswordMatch = await bcrypt.compare(password, foundUser.password);
//   const IsValid = !(foundUser == null || !isPasswordMatch);
//   console.log('user login: ',foundUser);
//   console.log('a chat:', foundUser.chats[0]?.messages);
//   IsValid ? response.send(foundUser) : response.sendStatus(404);
// } catch (error) {
//   console.log("Login error:", error);
//   response.redirect('login');
// }
// };
//working with new users (with password hashing)
// export async function signUp(request, response){
//   try {
//     const saltRounds = 12;
//     console.log("body:",request.body);
//     const { email, username, password } = request.body;
//     const hashedPassword = await bcrypt.hash(password, saltRounds);
//     console.log("email:",email,"username:",username,"password:",hashedPassword);
//     const newUser = new User({ email, username, password: hashedPassword });
//     const signUpUser = await Dal.userRep.add(newUser);
//     response.sendStatus(201);
//   } catch (error) {
//     console.log("signUp error:", error);
//     response.redirect('signUp');
//   }
// }
// export async function login (request, response) {
//   try {
//     const { email, password } = request.body;
//   const foundUser = await Dal.userRep.findByEmail(email);
//   const isPasswordMatch = await bcrypt.compare(password, foundUser.password);
//   const IsValid = !(foundUser == null || !isPasswordMatch);
//   console.log('user login: ',foundUser);
//   console.log('a chat:', foundUser.chats[0]?.messages);
//   IsValid ? response.send(foundUser) : response.sendStatus(404);
// } catch (error) {
//   console.log("Login error:", error);
//   response.redirect('login');
// }
// };
//                                                                                                   //working with new users (with password hashing)
// export async function signUp(request, response){
//   try {
//     const saltRounds = 12;
//     console.log("body:",request.body);
//     const { email, username, password } = request.body;
//     const hashedPassword = await bcrypt.hash(password, saltRounds);
//     console.log("email:",email,"username:",username,"password:",hashedPassword);
//     const newUser = new User({ email, username, password: hashedPassword });
//     const signUpUser = await Dal.userRep.add(newUser);
//     response.sendStatus(201);
//   } catch (error) {
//     console.log("signUp error:", error);
//     response.redirect('signUp');
//   }
// }
export async function login(request, response) {
    try {
        const { email, password } = request.body;
        const foundUser = await Dal.userRep.findByEmail(email);
        if (foundUser) {
            const isPasswordMatch = await bcrypt.compare(password, foundUser.password);
            const IsValid = !(foundUser == null || !isPasswordMatch);
            if (IsValid) {
                // Generate a new token
                const newToken = jwt.sign({ userId: foundUser.id }, "jwtSecret", {
                    expiresIn: "1h",
                });
                // Send the new token and user data in the response
                response.json({ token: newToken, user: foundUser });
            }
        }
        else {
            response.status(404).send("user not found");
        }
    }
    catch (error) {
        console.log("Login error:", error);
        response.response.status(500).send("Internal server error");
    }
}
export async function addContact(request, response) {
    console.log("adding a contact...");
    console.log("body:", request.body);
    const updatedUserData = request.body;
    const updatedUser = await Dal.userRep.getById(updatedUserData._id);
    updatedUser.friends = updatedUserData.friends;
    await Dal.userRep.update(updatedUser._id, updatedUser);
    response.status(202).send("user updated");
}
export async function addChat(request, response) {
    console.log("adding a Chat...");
    console.log("body:", request.body);
    const newChatData = request.body;
    const newChat = new Chat({ ...newChatData });
    await Dal.chatRep.add(newChat);
    newChatData.participants.forEach(async (pData) => {
        const user = await Dal.userRep.getById(pData._id);
        user.chats.push(newChat);
        await Dal.userRep.update(user._id, user);
    });
    response.status(202).send("chat updated");
}
//# sourceMappingURL=user.js.map