import { Chat } from "./chat.js";
import { Message } from "./message.js";
import { Document } from "mongoose";
import { IUser } from "../schemas/user.js";

export class User {
  constructor(public friends: User[],
    public chats: Chat[],
    public messages: Message[],
    public username: string,
    public email: string, 
    public password: String){
      
  }
}
