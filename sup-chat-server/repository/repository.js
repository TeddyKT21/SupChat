const user = require("./userRepository");
const chat = require("./chatRepository");
const message = require("./messageRepository");

async function userAdd(data) {
  await user.add(data);
}

async function userGet() {
  return await user.get();
}
