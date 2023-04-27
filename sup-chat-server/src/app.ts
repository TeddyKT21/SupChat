import express from "express";
import {promises} from "fs" ;
import path from "path";
import bodyparser from 'body-parser';
import cors from "cors";
import  UserRouter  from "./routes/user.js"
import mongoose from "mongoose";
const app = express();
const port = 8080;

const MONGODB_URI = "mongodb://127.0.0.1:27017/supChat";

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true})); 
// app.use(cors());

/* // add routes
let projectRoutes = require('./routes/projects');
app.use("/projects", projectRoutes);

const file = "./db/db.json";
const filePath = path.join(__dirname, file); */
app.use("/", UserRouter);

app.get("/", (req, res) => {
  res.render("home");
});
mongoose.connect(MONGODB_URI).then((result) => {
  app.listen(port, () => {
    console.log(`Chat app listening on port ${port}!`);
  });
});
  

