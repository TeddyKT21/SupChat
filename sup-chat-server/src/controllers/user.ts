import { Sup } from "../repository/Sup.js";
import { IUser, User } from "../schemas/user.js";
import { Chat } from "../schemas/chat.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const Dal = new Sup();

export const getUserByToken = (token) => {
  try {
    // Verify and decode the token
    const decodedToken = jwt.verify(token, 'jwtSecret');

    // Extract the user ID from the token payload
    const userId = decodedToken.userId;

    // Retrieve the user information based on the user ID
    const user = Dal.userRep.findById(userId);

    // Return the user information
    return user;
  } catch (error) {
    // Handle any errors that occur during the token verification or user retrieval process
    throw new Error('Unable to retrieve user by token');
  }
};


export async function signUp(request, response){
  try {
    const saltRounds = 12;
    const { email, username, password } = request.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("email:",email,"username:",username,"password:",hashedPassword);
    const newUser = new User({ email, username, password: hashedPassword });
    const signUpUser = await Dal.userRep.add(newUser);
    response.sendStatus(201);
  } catch (error) {
    console.log("signUp error:", error);
    response.redirect('signUp');
  }
}
export async function login(request, response) {
  try {
    const { email, password } = request.body;
    const foundUser = await Dal.userRep.findByEmail(email);
    if (foundUser) {
      const isPasswordMatch = await bcrypt.compare(
        password,
        foundUser.password
      );
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
