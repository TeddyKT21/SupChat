import { IRepository } from "./IRepository.js";
import { IUser } from "../../schemas/user.js";
export interface IUserRepository extends IRepository<IUser> {

}