const ChatRoom = require("./chatRoom");

const chat = new ChatRoom();

chat.on("join", (user) => {
  console.log(`${user} has joined the chat`);
});

chat.on("message", (user, message) => {
  console.log(`${user} : ${message}`);
});

chat.on("leave", (user) => {
  console.log(`${user} has left the chat`);
});

chat.join("Alice");
chat.join("Roy");

chat.sendMessage("Alice", "Hello from Alice");
chat.leaveChat("Alice");
chat.sendMessage("Alice", "How are you all?");
chat.sendMessage("Roy", "Hello from Roy");

chat.leaveChat("Roy");
chat.leaveChat("Bob");
