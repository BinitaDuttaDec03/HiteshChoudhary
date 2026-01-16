const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("Home Page");
});

app.get("/contact-us", (req, res) => {
  res.end("Contact Page");
});

app.get("/tweets", (req, res) => {
  res.end("Tweets Page");
});

app.post("/tweets", (req, res) => {
  res.end("Tweets created");
});

app.listen(3000, () => {
  console.log("Server is up!!");
});
