const express = require("express");

const books = [
  { id: 1, title: "Book One", author: "Author One" },
  { id: 2, title: "Book Two", author: "Author Two" },
  { id: 3, title: "Book Three", author: "Author Three" },
];

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);

  const book = books.find((book) => book.id === bookId);

  if (book) res.json(book);
  else res.status(404).json({ message: "Book not found with this id" });
});

app.post("/books", (req, res) => {
  const book = req.body;
  book.id = books.length + 1;

  books.push(book);

  res.status(201).json(books);
});

app.delete("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  let book = books.find((book) => book.id === bookId);

  if (!book)
    return res.status(404).json({ message: "Book not found with this id" });

  let newBooks = books.filter((book) => book.id !== bookId);

  res.json(newBooks);
});

app.listen(PORT, () => {
  console.log("Server is up!!");
});
