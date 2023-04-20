import { User } from "../models/user";

export class Message {
constructor(public user: User, 
  public text: String, 
  public dateTime: Date){

}
}

