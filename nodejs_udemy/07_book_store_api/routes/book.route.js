const express = require("express");
const { books } = require("../db/book.db");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(books);
});

router.get("/:id", (req, res) => {
  const bookId = parseInt(req.params.id);

  const book = books.find((book) => book.id === bookId);

  if (book) res.json(book);
  else res.status(404).json({ message: "Book not found with this id" });
});

router.post("", (req, res) => {
  const book = req.body;
  book.id = books.length + 1;

  books.push(book);

  res.status(201).json(books);
});

router.delete("/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  let book = books.find((book) => book.id === bookId);

  if (!book)
    return res.status(404).json({ message: "Book not found with this id" });

  let newBooks = books.filter((book) => book.id !== bookId);

  res.json(newBooks);
});

module.exports = router;
