import express from "express";
import { login, signUp, addContact, addChat, getUserByToken /* , verifyToken */ } from "../controllers/user.js";
import { Sup } from "../repository/Sup.js";
const Dal = new Sup();
const UserRouter = express.Router();
UserRouter.route("/getUserByToken")
    .post(getUserByToken);
UserRouter.route("/login")
    .post(login);
UserRouter.route("/signUp")
    .post(signUp);
UserRouter.route("/addContact")
    .put(Dal.userRep.verifyToken, addContact);
UserRouter.route("/addNewChat")
    .post(addChat);
export default UserRouter;
//# sourceMappingURL=user.js.map