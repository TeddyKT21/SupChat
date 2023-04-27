import { IRepository } from "./IRepository.js";
import { IMessage } from "../../schemas/message.js";
export interface IMessageRepository extends IRepository<IMessage> {

}