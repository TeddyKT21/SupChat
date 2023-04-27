import { IChatRepository } from "./IChatRepository.js";
import { IMessageRepository } from "./IMessageRepository.js";
import { IUserRepository } from "./IUserRepository.js";

export interface ISup {
    userRep: IUserRepository;
    messageRep: IMessageRepository;
    chatRep: IChatRepository;
}