import express from "express";
const router=express.Router();
import { deleteTodos, getTodos,saveTodos, updateTodos } from "../controllers/TodoControllers.js";

router.get("/get",getTodos);
router.post("/save",saveTodos);
router.delete("/delete/:id",deleteTodos);
router.patch("/update/:id",updateTodos);

export default router;
