console.log("this is the full path:", __dirname);
import { User } from "../models/user.js";

export function login (request, response) {
  response.render("hello world");
};
