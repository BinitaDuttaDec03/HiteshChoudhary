const express = require("express");
const booksController = require("../controllers/book.controller");

const router = express.Router();

router.get("/", booksController.getAllBooks);

router.get("/:id", booksController.getBookById);

router.post("/", booksController.createBook);

router.delete("/:id", booksController.deleteBookById);

module.exports = router;
