import { User } from "../models/user.js";
import { Repository } from "./repository.js";
import { Model } from "mongoose";
import { IUserRepository } from './interfaces/IUserRepository.js'

class UserRepository extends Repository<User> implements IUserRepository {
  constructor(model: Model<User>) {
    super(model);
  }
}

module.exports = { UserRepository };
