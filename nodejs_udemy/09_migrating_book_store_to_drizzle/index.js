import "dotenv/config";
import express from "express";
import bookRoutes from "./routes/book.route.js";
import authorRoutes from "./routes/author.route.js";

const app = express();
const PORT = 8000;

app.use(express.json());

app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);

app.listen(PORT, () => {
  console.log("Server is up!!");
});
