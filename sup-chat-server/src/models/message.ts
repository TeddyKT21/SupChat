import { User } from "../models/user.js";

export class Message {
constructor(public user: User, 
  public text: String, 
  public dateTime: Date){

}
}

