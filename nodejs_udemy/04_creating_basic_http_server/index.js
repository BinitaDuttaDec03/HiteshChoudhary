const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Incoming req");
  res.end("Hello from server");
});

server.listen(8000, () => {
  console.log("Server is up!");
});
