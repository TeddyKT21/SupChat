import { IChatRepository } from "./interfaces/IChatRepository.js";
import { IMessageRepository } from "./interfaces/IMessageRepository.js";
import { IUserRepository } from "./interfaces/IUserRepository.js";
import { ISup } from "./interfaces/ISup.js";
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