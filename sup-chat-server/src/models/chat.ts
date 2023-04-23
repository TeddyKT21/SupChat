import { User } from "../models/user.js";
import { Message } from "../models/message.js";

  
  export class Chat {
    constructor(public participants: User[],
        public messages: Message[],
        public admins: User[],
        public name: String,
        public description: String,) {

    }
  }
