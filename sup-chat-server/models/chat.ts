import { User } from "../models/user";
import { Message } from "../models/message";

  
  export class Chat {
    constructor(public participants: User[],
        public messages: Message[],
        public admins: User[],
        public name: String,
        public description: String,) {

    }
  }
