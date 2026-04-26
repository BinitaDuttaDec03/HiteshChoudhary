import express from "express";
import bcrypt from "bcrypt";
import { usersTable } from "../db/schema.js";
import { eq } from "drizzle-orm";
import db from "../db/index.js";
import jwt from "jsonwebtoken";
import { ensureAuthenticated } from "../middlewares/auth.middleware.js";

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

  if (!user) {
    return res.status(400).json({ error: "Invalid Email" });
  }

  const matchedPassword = await bcrypt.compare(password, user.password);

  if (!matchedPassword) {
    return res.status(400).json({ error: "Invalid Password" });
  }

  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "10m" });

  res.status(200).json({ status: "success", token });
});

router.get("/", ensureAuthenticated, async (req, res) => {
  const user = req.user;

  if (!user) {
    return res.status(401).json({ error: "You are not logged in" });
  }

  return res.json({ user });
});

router.patch("/", ensureAuthenticated, async (req, res) => {
  const user = req.user;

  if (!user) {
    return res.status(401).json({ error: "You are not logged in" });
  }

  const { name } = req.body;
  console.log(name);
  await db.update(usersTable).set({ name }).where(eq(usersTable.id, user.id));

  return res.json({ status: "success", data: user });
});

export default router;
