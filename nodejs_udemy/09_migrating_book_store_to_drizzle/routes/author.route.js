import express from "express";
import authorsController from "../controllers/author.controller.js";

const router = express.Router();

router.get("/", authorsController.getAllAuthors);

router.get("/:id", authorsController.getAuthorById);

router.post("/", authorsController.createAuthor);

router.delete("/:id", authorsController.deleteAuthorById);

export default router;
