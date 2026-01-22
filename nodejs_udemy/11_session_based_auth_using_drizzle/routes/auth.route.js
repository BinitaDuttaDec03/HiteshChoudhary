import express from "express";
import bcrypt from "bcrypt";
import db from "../db/index.js";
import { userSessionsTable, usersTable } from "../db/schema.js";
import { eq } from "drizzle-orm";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await db
    .select({ email: usersTable.email })
    .from(usersTable)
    .where((table) => eq(table.email, email));

  if (existingUser.length) {
    return res.status(400).json({ error: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const [user] = await db
    .insert(usersTable)
    .values({
      name,
      email,
      password: hashedPassword,
    })
    .returning({ id: usersTable.id });

  return res.status(201).json({ status: "success", data: { userId: user.id } });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const [user] = await db
    .select()
    .from(usersTable)
    .where((table) => eq(table.email, email));

  console.log(user);

  if (!user) {
    return res.status(400).json({ error: "Invalid Email" });
  }

  console.log(user);

  const matchedPassword = await bcrypt.compare(password, user.password);

  if (!matchedPassword) {
    return res.status(400).json({ error: "Invalid Password" });
  }

  const [session] = await db
    .insert(userSessionsTable)
    .values({
      userId: user.id,
    })
    .returning({ id: userSessionsTable.id });

  return res.json({ status: "success", sessionId: session.id });
});

export default router;
