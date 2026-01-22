import "dotenv/config";
import express from "express";
import authRoutes from "./routes/auth.route.js";

const app = express();
const PORT = process.env.PORT ?? 7000;

app.use(express.json());

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}!`);
});
