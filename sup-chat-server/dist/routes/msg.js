import express from "express";
import { addMessage } from "../controllers/msg.js";
const MessageRouter = express.Router();
MessageRouter.route("/addNewMessage")
    .post(addMessage);
export default MessageRouter;
//# sourceMappingURL=msg.js.map