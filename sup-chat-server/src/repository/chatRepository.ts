import { Chat, IChat } from '../schemas/chat.js';
import { IChatRepository } from './interfaces/IChatRepository.js'
import { Repository } from './repository.js';
import { Model } from "mongoose";

export class ChatRepository extends Repository<IChat> implements IChatRepository {
  constructor(model: Model<IChat>) {
    super(model);
  }
}

