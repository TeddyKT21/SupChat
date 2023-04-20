let User = require("../models/user");

async function addUser(userData) {
  const user = new User({
    friends: [],
    chats: [],
    messages: [],
    username: userData.username,
    email: userData.email,
    password: userData.password,
  });

  await user.save();
}

async function getUsers() {
  return await User.find();
}

module.exports = { add: addUser, get: getUsers };
