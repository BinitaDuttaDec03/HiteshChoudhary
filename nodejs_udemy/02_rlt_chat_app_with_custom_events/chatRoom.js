const EventEmitter = require("events");

class ChatRoom extends EventEmitter {
  constructor() {
    super();
    this.users = new Set();
  }

  join(user) {
    this.users.add(user);
    this.emit("join", user);
  }

  sendMessage(user, message) {
    if (this.users.has(user)) {
      this.emit("message", user, message);
    } else {
      console.log(`${user} is not in the chat`);
    }
  }

  leaveChat(user) {
    if (this.users.has(user)) {
      this.emit("leave", user);
      this.users.delete(user);
    } else {
      console.log(`${user} is not in the chat`);
    }
  }
}

module.exports = ChatRoom;
