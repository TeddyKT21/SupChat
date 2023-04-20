const express = require("express");
const fs = require('fs').promises;
const path = require('path');
let bodyparser = require('body-parser');
let cors = require('cors');

const app = express();
const port = 8080;



app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());

// add routes
let projectRoutes = require('./routes/projects');
app.use("/projects", projectRoutes);

const file = "./db/db.json";
const filePath = path.join(__dirname, file);

// handle requests
app.get('/', async (req,res)=>{

  const home = "./public/home.html";
  const homePath = path.join(__dirname, home);

  let htmlFile = await fs.readFile(homePath);

  let dbJson = JSON.parse(await fs.readFile(filePath));
  let projects = dbJson.map(item=>`<div>
          <h1>${item.title} (${item.id})</h1>
          <p>${item.description}</p>
  </div>`);

  htmlFile = htmlFile.toString().replace('{{projects}}', projects.join(''))

  res.send(htmlFile);
  res.end();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});