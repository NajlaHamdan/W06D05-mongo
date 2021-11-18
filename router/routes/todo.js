const express = require("express");
//import createTodo from todo routes
const {
  createTodo,
  getTodos,
  getTodoById,
  deleteTodo,
  updateTodo,
} = require("./../controllers/todo");
//create router for todo
const todoRouter = express.Router();

todoRouter.post("/createTodo", createTodo);
todoRouter.post("/deleteTodo", deleteTodo);
todoRouter.post("/updateTodo", updateTodo);
todoRouter.get("/getTodos", getTodos);
todoRouter.get("/getTodoById", getTodoById);

module.exports = todoRouter;
