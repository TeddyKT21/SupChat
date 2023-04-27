import express from "express";
import { login, signUp } from "../controllers/user.js";
const UserRouter = express.Router();
UserRouter.route("/login")
    .get(login)
    .post(signUp);
export default UserRouter;
//# sourceMappingURL=user.js.map