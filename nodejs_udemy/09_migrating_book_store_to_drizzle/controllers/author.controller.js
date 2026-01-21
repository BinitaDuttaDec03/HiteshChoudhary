import db from "../db/index.js";
import authorsTable from "../models/author.model.js";
import { eq, ilike, sql } from "drizzle-orm";

const getAllAuthors = async (req, res) => {
  const search = req.query.search;
  let authors;

  if (search) {
    authors = await // .where(ilike(authorsTable.title, `%${search}%`));
    db
      .select()
      .from(authorsTable)
      .where(
        sql`to_tsvector('english', ${authorsTable.firstName}) @@ to_tsquery('english', ${search})`,
      );
  } else {
    authors = await db.select().from(authorsTable);
  }

  res.json(authors);
};

const getAuthorById = async (req, res) => {
  const authorId = req.params.id;

  const [author] = await db
    .select()
    .from(authorsTable)
    .where((table) => eq(table.id, authorId))
    .limit(1);

  if (author) res.json(author);
  else res.status(404).json({ message: "Author not found with this id" });
};

const createAuthor = async (req, res) => {
  const { firstName, lastName, email } = req.body;

  if (!firstName || !email) {
    return res.status(400).json({ message: "Please provide all the details" });
  }

  const [author] = await db
    .insert(authorsTable)
    .values({ firstName, email, lastName })
    .returning({ id: authorsTable.id });

  return res
    .status(201)
    .json({ message: "Author created successfully", id: author.id });
};

const deleteAuthorById = async (req, res) => {
  const authorId = req.params.id;
  const author = await db
    .delete(authorsTable)
    .where(eq(authorsTable.id, authorId));

  if (!author)
    return res.status(404).json({ message: "Author not found with this id" });

  return res
    .status(201)
    .json({ message: "Author deleted successfully", id: author.id });
};

export default { getAllAuthors, getAuthorById, createAuthor, deleteAuthorById };
