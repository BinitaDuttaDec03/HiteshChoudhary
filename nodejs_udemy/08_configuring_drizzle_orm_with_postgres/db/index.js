import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

console.log("DB url: ----- ", process.env.DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const db = drizzle({ client: pool });

export default db;
