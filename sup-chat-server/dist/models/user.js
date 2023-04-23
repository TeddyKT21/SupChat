console.log("this is user model full path:", __dirname);
export class User {
    friends;
    chats;
    messages;
    username;
    email;
    password;
    constructor(friends, chats, messages, username, email, password) {
        this.friends = friends;
        this.chats = chats;
        this.messages = messages;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
//# sourceMappingURL=user.js.map