const express = require("express");
const fs = require("fs").promises;
const path = require("path");
let bodyparser = require("body-parser");
let cors = require("cors");
const userRoutes = require("./routes/user");
const app = express();
const port = 8080;

/* app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true})); */
app.use(cors());

/* // add routes
let projectRoutes = require('./routes/projects');
app.use("/projects", projectRoutes);

const file = "./db/db.json";
const filePath = path.join(__dirname, file); */
app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Chat app listening on port ${port}!`);
});
