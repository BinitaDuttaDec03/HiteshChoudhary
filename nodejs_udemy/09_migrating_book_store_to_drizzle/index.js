import "dotenv/config";
import express from "express";
import bookRoutes from "./routes/book.route.js";

const app = express();
const PORT = 8000;

app.use(express.json());

app.use("/books", bookRoutes);

app.listen(PORT, () => {
  console.log("Server is up!!");
});
