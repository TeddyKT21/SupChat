//import { User } from "../models/user.js";
import { User,IUser } from "../schemas/user.js";
import { Repository } from "./repository.js";
import { Model, Schema } from "mongoose";
import { IUserRepository } from './interfaces/IUserRepository.js'

export class UserRepository extends Repository<IUser> implements IUserRepository {
  constructor(model: Model<IUser>) {
    super(model);
  }

  async findByEmail(email: string){
    const user = await User.findOne({email})
    .populate('friends')
    .populate({
      path: 'chats',
      model:'Chat',
      populate:{
        path: 'messages',
        populate:{ path: 'user',select:'username email'},
        model:'Message'
        }});
    return user;
  }
  
  async findById(id: Schema.Types.ObjectId){
    const user = await User.findOne({id})
    .populate('friends')
    .populate({
      path: 'chats',
      model:'Chat',
      populate:{
        path: 'messages',
        populate:{ path: 'user',select:'username email'},
        model:'Message'
        }});
    return user;
  }
  
}
