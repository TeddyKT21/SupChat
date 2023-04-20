import { Message } from './../models/message'
import {IMessageRepository} from './interfaces/IMessageRepository'
import { Repository } from './repository'
import { Model } from "mongoose";

export class MessageRepository extends Repository<Message> implements IMessageRepository{
  constructor(model: Model<Message>) {
    super(model);
  }
}

module.exports = { MessageRepository };
