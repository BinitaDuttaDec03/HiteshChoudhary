const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const method = req.method;
  const path = req.url;

  const log = `[${Date.now()}]: ${method} ${path}\n`;
  fs.appendFileSync("log.txt", log, "utf-8");

  switch (method) {
    case "GET":
      switch (path) {
        case "/":
          return res.writeHead(200).end("Hello from server");
        case "/contact-us":
          return res
            .writeHead(200)
            .end("Email: binita@gmail.com, Contact: 90000000");
        case "/tweet":
          return res.writeHead(200).end("Tweet 1\nTweet 2");
      }

    case "POST":
      switch (path) {
        case "/tweet":
          return res.writeHead(201).end("Tweet posted");
      }

    default:
      return res.writeHead(400).end("Something went wrong!");
  }
});

server.listen(8000, () => {
  console.log("Server is up!");
});
