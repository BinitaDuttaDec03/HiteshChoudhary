const express = require("express");
const bookRoutes = require("./routes/book.route");

const app = express();
const PORT = 8000;

app.use(express.json());

app.use("/books", bookRoutes);

app.listen(PORT, () => {
  console.log("Server is up!!");
});
