import { Chat } from "./chat.js";
import { Message } from "./message.js";

console.log("this is user model full path:",__dirname);
export class User {
  constructor(public friends: User[],
    public chats: Chat[],
    public messages: Message[],
    public username: string,
    public email: string, 
    public password: String){
  
  }
}
