import { IChatRepository } from "./interfaces/IChatRepository.js";
import { IMessageRepository } from "./interfaces/IMessageRepository.js";
import { IUserRepository } from "./interfaces/IUserRepository.js";
import { UserRepository } from "./userRepository.js"
import { MessageRepository } from "./messageRepository.js";
import { ChatRepository } from "./chatRepository.js";
import { ISup } from "./interfaces/ISup.js";
import { Model } from "mongoose";
import { User } from "../schemas/user.js";
import { Message } from "../schemas/message.js";
import { Chat } from "../schemas/chat.js";

export class Sup implements ISup {
  public userRep:IUserRepository;
  public messageRep:IMessageRepository;
  public chatRep: IChatRepository
  constructor() {
    this.userRep = new UserRepository(User);
    this.messageRep = new MessageRepository(Message);
    this.chatRep = new ChatRepository(Chat);
  }
 //   user: IUserRepository;
 //   message: IMessageRepository;
 //   chat: IChatRepository;
} 