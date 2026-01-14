const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("greet", (username) => {
  console.log(`Hello from ${username}`);
});

eventEmitter.on("greet", (username) => {
  console.log(`Hello from ${username} listener 2`);
});

eventEmitter.once("notify", () => {
  console.log("Message received");
});

const testListener = () => {
  console.log("This is a test listener");
};

eventEmitter.on("test", testListener);
eventEmitter.emit("test");
eventEmitter.removeListener("test", testListener);
eventEmitter.emit("test");

eventEmitter.emit("greet", "Binita");
eventEmitter.emit("greet", "Riya");

eventEmitter.emit("notify");
eventEmitter.emit("notify");

console.log(eventEmitter.listeners("greet"));
