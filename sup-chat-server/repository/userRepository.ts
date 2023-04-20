import { User } from "../models/user";
import { Repository } from "./repository";
import { Model } from "mongoose";
import { IUserRepository } from './interfaces/IUserRepository'

class UserRepository extends Repository<User> implements IUserRepository {
  constructor(model: Model<User>) {
    super(model);
  }
}

module.exports = { UserRepository };
