import {Chat} from '../models/chat';
import { IChatRepository } from './interfaces/IChatRepository'
import { Repository } from './repository';
import { Model } from "mongoose";

export class ChatRepository extends Repository<Chat> implements IChatRepository {
  constructor(model: Model<Chat>) {
    super(model);
  }
}

module.exports = { ChatRepository };
