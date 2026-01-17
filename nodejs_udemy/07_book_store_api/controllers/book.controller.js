const { books } = require("../db/book.db");

exports.getAllBooks = (req, res) => {
  res.json(books);
};

exports.getBookById = (req, res) => {
  const bookId = parseInt(req.params.id);

  const book = books.find((book) => book.id === bookId);

  if (book) res.json(book);
  else res.status(404).json({ message: "Book not found with this id" });
};

exports.createBook = (req, res) => {
  const book = req.body;
  book.id = books.length + 1;

  books.push(book);

  res.status(201).json(books);
};

exports.deleteBookById = (req, res) => {
  const bookId = parseInt(req.params.id);
  let book = books.find((book) => book.id === bookId);

  if (!book)
    return res.status(404).json({ message: "Book not found with this id" });

  let newBooks = books.filter((book) => book.id !== bookId);

  res.json(newBooks);
};
