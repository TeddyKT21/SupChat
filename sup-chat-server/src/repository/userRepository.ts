//import { User } from "../models/user.js";
import { User,IUser } from "../schemas/user.js";
import { Repository } from "./repository.js";
import mongoose,{ Model, Schema } from "mongoose";
import { IUserRepository } from './interfaces/IUserRepository.js'
import jwt from 'jsonwebtoken';
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
  
  async findById(id: string){
    //console.log("in findById id: ", id);
    const { ObjectId } = mongoose.Types;
    const user = await User.findOne({_id: new ObjectId(id)})
    .populate('friends')
    .populate({
      path: 'chats',
      model:'Chat',
      populate:{
        path: 'messages',
        populate:{ path: 'user',select:'username email'},
        model:'Message'
      }});
      //console.log("in findById user: ", user);
    return user;
  }
  
  async verifyToken(request, response, next) {
    console.log("req body: ", request.body);
    const token = request.body.token;
  
    if (!token) {
      console.log("******************* Token not found: ",token," *******************")
      return response.status(401).json({ message: "No token provided" });
    }
  
    jwt.verify(token, "mySecretKey", (error, decodedToken) => {
      if (error) {
        console.log("******************* Error in verify Token: ",token," *******************")
        return response.status(403).json({ message: "Invalid token" });
      }
  
      // Add the decoded token to the request object for further use
      request.decodedToken = decodedToken;
      next();
    });
  }

  async isValidToken(token: string) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, "mySecretKey", (error) => {
        if (error) {
          console.log("******************* Error in verify Token: ", token, " *******************");
          resolve(false); // Token verification failed
        } else {
          resolve(true); // Token verification succeeded
        }
      });
    });
  }
  
  // async isValidToken(token: string){

  //   jwt.verify(token, "mySecretKey", (error) => {
  //     if (error) {
  //       console.log("******************* Error in verify Token: ",token," *******************")
  //       return false;
  //     }
  //   });

  //   return true;
  // }
}
