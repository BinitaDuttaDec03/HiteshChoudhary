import "dotenv/config";
import express from "express";
import authRoutes from "./routes/auth.route.js";
import adminRoutes from "./routes/admin.route.js";
import { adminMiddleware } from "./middlewares/adminMiddleware.js";

const app = express();
const PORT = process.env.PORT ?? 7000;

app.use(express.json());
app.use(adminMiddleware);

app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}!`);
});
