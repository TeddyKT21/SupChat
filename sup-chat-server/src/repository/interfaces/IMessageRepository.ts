import { IRepository } from "./IRepository.js";
import { Message } from "../../models/message.js";
export interface IMessageRepository extends IRepository<Message> {

}