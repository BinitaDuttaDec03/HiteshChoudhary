import "dotenv/config";
import db from "./db/index.js";
import { usersTable } from "./drizzle/schema.js";

console.log(process.env.DATABASE_URL);

const getAllUsers = async () => {
  const users = await db.select().from(usersTable);
  console.log("Users in db:", users);

  return users;
};

const createUser = async ({ name, email }) => {
  await db.insert(usersTable).values({
    name,
    email,
  });
};

getAllUsers();

// createUser({ name: "Binita", email: "binita@gmail.com" });
// createUser({ name: "Priyo", email: "priyo@gmail.com" });
