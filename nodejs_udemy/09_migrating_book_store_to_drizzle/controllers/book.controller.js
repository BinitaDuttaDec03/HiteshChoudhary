import db from "../db/index.js";
import authorsTable from "../models/author.model.js";
import booksTable from "../models/book.model.js";
import { eq, ilike, sql } from "drizzle-orm";

const getAllBooks = async (req, res) => {
  const search = req.query.search;
  let books;

  if (search) {
    books = await // .where(ilike(booksTable.title, `%${search}%`));
    db
      .select()
      .from(booksTable)
      .where(
        sql`to_tsvector('english', ${booksTable.title}) @@ to_tsquery('english', ${search})`,
      );
  } else {
    books = await db.select().from(booksTable);
  }

  res.json(books);
};

const getBookById = async (req, res) => {
  const bookId = req.params.id;

  const [book] = await db
    .select()
    .from(booksTable)
    .where((table) => eq(table.id, bookId))
    .leftJoin(authorsTable, eq(booksTable.authorId, authorsTable.id))
    .limit(1);

  if (book) res.json(book);
  else res.status(404).json({ message: "Book not found with this id" });
};

const createBook = async (req, res) => {
  const { title, description, authorId } = req.body;

  if (!title || !authorId) {
    return res.status(400).json({ message: "Please provide all the details" });
  }

  const [book] = await db
    .insert(booksTable)
    .values({ title, authorId, description })
    .returning({ id: booksTable.id });

  return res
    .status(201)
    .json({ message: "Book created successfully", id: book.id });
};

const deleteBookById = async (req, res) => {
  const bookId = req.params.id;
  const book = await db.delete(booksTable).where(eq(booksTable.id, bookId));

  if (!book)
    return res.status(404).json({ message: "Book not found with this id" });

  return res
    .status(201)
    .json({ message: "Book deleted successfully", id: book.id });
};

export default { getAllBooks, getBookById, createBook, deleteBookById };
