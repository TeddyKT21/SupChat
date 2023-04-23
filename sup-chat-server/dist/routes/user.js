import express from "express";
const router = express.Router();
import { login } from "../controllers/user.js";
router.route("/login").get(login);
module.exports = router;
//# sourceMappingURL=user.js.map