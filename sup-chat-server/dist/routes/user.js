import express from "express";
import { login, signUp, addContact } from "../controllers/user.js";
const UserRouter = express.Router();
UserRouter.route("/login")
    .post(login);
UserRouter.route("/signUp")
    .post(signUp);
UserRouter.route("/addContact")
    .put(addContact);
export default UserRouter;
//# sourceMappingURL=user.js.map