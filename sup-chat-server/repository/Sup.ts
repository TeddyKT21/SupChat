import { IChatRepository } from "./interfaces/IChatRepository";
import { IMessageRepository } from "./interfaces/IMessageRepository";
import { IUserRepository } from "./interfaces/IUserRepository";
import { ISup } from "./interfaces/ISup";
export class Sup implements ISup {
  constructor(
    public user: IUserRepository,
    public message: IMessageRepository,
    public chat: IChatRepository
  ) {}
 //   user: IUserRepository;
 //   message: IMessageRepository;
 //   chat: IChatRepository;
} 