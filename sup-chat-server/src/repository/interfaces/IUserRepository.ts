import { IRepository } from "./IRepository.js";
import { User } from '../../models/user.js'
export interface IUserRepository extends IRepository<User> {

}