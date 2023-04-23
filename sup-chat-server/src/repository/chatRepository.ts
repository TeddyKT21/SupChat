import {Chat} from '../models/chat.js';
import { IChatRepository } from './interfaces/IChatRepository.js'
import { Repository } from './repository.js';
import { Model } from "mongoose";

export class ChatRepository extends Repository<Chat> implements IChatRepository {
  constructor(model: Model<Chat>) {
    super(model);
  }
}

module.exports = { ChatRepository };
