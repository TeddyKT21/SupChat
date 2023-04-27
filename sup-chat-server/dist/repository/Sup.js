import { UserRepository } from "./userRepository.js";
import { MessageRepository } from "./messageRepository.js";
import { ChatRepository } from "./chatRepository.js";
import { User } from "../schemas/user.js";
import { Message } from "../schemas/message.js";
import { Chat } from "../schemas/chat.js";
export class Sup {
    userRep;
    messageRep;
    chatRep;
    constructor() {
        this.userRep = new UserRepository(User);
        this.messageRep = new MessageRepository(Message);
        this.chatRep = new ChatRepository(Chat);
    }
}
//# sourceMappingURL=Sup.js.map