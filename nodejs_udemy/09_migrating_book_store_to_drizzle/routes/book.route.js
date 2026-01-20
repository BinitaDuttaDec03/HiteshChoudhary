import express from "express";
import booksController from "../controllers/book.controller.js";

const router = express.Router();

router.get("/", booksController.getAllBooks);

router.get("/:id", booksController.getBookById);

router.post("/", booksController.createBook);

router.delete("/:id", booksController.deleteBookById);

export default router;
