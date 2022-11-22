import express from "express";
import { getAllTodo,getTodoByID, updateTodo,addTodo } from "../controllers/todoController.js";

const router = express.Router()

router.get("/",getAllTodo);

router.get("/detail/:id",getTodoByID);

router.post("/update", updateTodo);

router.post("/todo", addTodo);

export default router;
