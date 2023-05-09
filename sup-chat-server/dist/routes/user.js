import express from "express";
import { login, signUp, addContact, addChat } from "../controllers/user.js";
const UserRouter = express.Router();
UserRouter.route("/login")
    .post(login);
UserRouter.route("/signUp")
    .post(signUp);
UserRouter.route("/addContact")
    .put(addContact);
UserRouter.route("/addNewChat")
    .post(addChat);
export default UserRouter;
//# sourceMappingURL=user.js.map