import { IChatRepository } from "./IChatRepository";
import { IMessageRepository } from "./IMessageRepository";
import { IUserRepository } from "./IUserRepository";

export interface ISup {
    user: IUserRepository;
    message: IMessageRepository;
    chat: IChatRepository;
}