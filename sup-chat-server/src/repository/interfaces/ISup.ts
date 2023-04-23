import { IChatRepository } from "./IChatRepository.js";
import { IMessageRepository } from "./IMessageRepository.js";
import { IUserRepository } from "./IUserRepository.js";

export interface ISup {
    user: IUserRepository;
    message: IMessageRepository;
    chat: IChatRepository;
}