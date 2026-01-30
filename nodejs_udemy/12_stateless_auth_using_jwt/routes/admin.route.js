import express from "express";
import db from "../db/index.js";
import { usersTable } from "../db/schema.js";
import { ensureAuthenticated } from "../middlewares/adminMiddleware.js";

const router = express.Router();

router.get("/users", ensureAuthenticated, async (req, res) => {
  if (!req.user) {
    return res
      .status(401)
      .json({ error: "You must be authenticated to access this" });
  }

  const users = await db
    .select({
      id: usersTable.id,
      name: usersTable.name,
      email: usersTable.email,
    })
    .from(usersTable);

  res.json({ users });
});

export default router;
