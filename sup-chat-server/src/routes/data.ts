import express from "express";
import { fetchAllChats, fetchAllMessages, fetchAllUsers } from "../controllers/data.js"

const DataRouter = express.Router();

DataRouter.route("/users")
.get(fetchAllUsers);

DataRouter.route("/messages")
.get(fetchAllMessages);

DataRouter.route("/chats")
.get(fetchAllChats);

export default DataRouter;
