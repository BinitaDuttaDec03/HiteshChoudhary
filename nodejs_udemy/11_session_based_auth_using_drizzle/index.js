import "dotenv/config";
import express from "express";
import authRoutes from "./routes/auth.route.js";
import { userSessionsTable, usersTable } from "./db/schema.js";
import { eq } from "drizzle-orm";
import db from "./db/index.js";

const app = express();
const PORT = process.env.PORT ?? 7000;

app.use(express.json());

app.use(async (req, res, next) => {
  const sessionId = req.headers["session-id"];

  if (!sessionId) {
    return next();
  }

  const [data] = await db
    .select({
      sessionId: userSessionsTable.id,
      userId: userSessionsTable.userId,
      id: usersTable.id,
      name: usersTable.name,
      email: usersTable.email,
    })
    .from(userSessionsTable)
    .rightJoin(usersTable, eq(usersTable.id, userSessionsTable.userId))
    .where((table) => eq(table.sessionId, sessionId));

  if (!data) {
    return next();
  }

  req.user = data;
  next();
});

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}!`);
});
