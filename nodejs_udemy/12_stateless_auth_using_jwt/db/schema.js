import { uuid, pgTable, varchar, text, pgEnum } from "drizzle-orm/pg-core";

export const userRoleEnum = pgEnum("user-role", ["USER", "ADMIN"]);

export const usersTable = pgTable("users", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: text().notNull(),
  role: userRoleEnum().notNull().default("USER"),
});
