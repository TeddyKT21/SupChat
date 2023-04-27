//import { User } from "../models/user.js";
import { User,IUser } from "../schemas/user.js";
import { Repository } from "./repository.js";
import { Model } from "mongoose";
import { IUserRepository } from './interfaces/IUserRepository.js'

export class UserRepository extends Repository<IUser> implements IUserRepository {
  constructor(model: Model<IUser>) {
    super(model);
  }
}
