import { Message, IMessage } from '../schemas/message.js'
import {IMessageRepository} from './interfaces/IMessageRepository.js'
import { Repository } from './repository.js'
import { Model } from "mongoose";

export class MessageRepository extends Repository<IMessage> implements IMessageRepository{
  constructor(model: Model<IMessage>) {
    super(model);
  }
}

