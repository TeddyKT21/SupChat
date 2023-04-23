import { Message } from './../models/message.js'
import {IMessageRepository} from './interfaces/IMessageRepository.js'
import { Repository } from './repository.js'
import { Model } from "mongoose";

export class MessageRepository extends Repository<Message> implements IMessageRepository{
  constructor(model: Model<Message>) {
    super(model);
  }
}

module.exports = { MessageRepository };
