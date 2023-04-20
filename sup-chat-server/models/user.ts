import { Chat } from "../models/chat";
import { Message } from "../models/message";

export class User {
  constructor(public friends: User[],
    public chats: Chat[],
    public messages: Message[],
    public username: string,
    public email: string, 
    public password: String){
  
  }
}
