import { pgTable, uuid, varchar, text, index } from "drizzle-orm/pg-core";
import authorsTable from "./author.model.js";
import { sql } from "drizzle-orm";

const booksTable = pgTable(
  "books",
  {
    id: uuid().primaryKey().defaultRandom(),
    title: varchar({ length: 100 }).notNull(),
    description: text(),
    authorId: uuid()
      .references(() => authorsTable.id)
      .notNull(),
  },
  (table) => [
    index("title_search_index").using(
      "gin",
      sql`to_tsvector('english', ${table.title})`,
    ),
  ],
);

export default booksTable;
