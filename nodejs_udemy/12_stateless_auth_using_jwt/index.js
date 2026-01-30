import "dotenv/config";
import express from "express";
import authRoutes from "./routes/auth.route.js";
import jwt from "jsonwebtoken";

const app = express();
const PORT = process.env.PORT ?? 7000;

app.use(express.json());

app.use(async (req, res, next) => {
  try {
    const tokenHeader = req.headers["authorization"];

    if (!tokenHeader) {
      return next();
    }

    if (!tokenHeader.startsWith("Bearer")) {
      return res
        .status(400)
        .json({ error: "Authorization header must start with bearer" });
    }

    const token = tokenHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    next();
  }
});

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}!`);
});
