//import todo Schema from db folder
const todoModel = require("./../../db/models/todo");

// function to create new task in todo schema
const createTodo = (req, res) => {
  const { name } = req.body;
  const newTask = new todoModel({
    name,
  });
  newTask
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.send(err));
};

// function to get all tasks in todo schema
const getTodos = (req, res) => {
  todoModel
    .find({})
    .then((result) => {
      //send give the response as text . json give us the response as json format
      res.send(result);
    })
    .catch((err) => res.send(err));
};
const getTodoById = (req, res) => {
  const {id}=req.body;
  todoModel
    .find({_id:id})
    .then((result) => {
      //send give the response as text . json give us the response as json format
      res.send(result);
    })
    .catch((err) => res.send(err));
};
const deleteTodo = (req, res) => {
  const { id } = req.body;
  todoModel
    .updateOne({ _id: id }, { $set: { isDelete: true } })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};
const updateTodo = (req, res) => {
  const { name } = req.body;
  const { id } = req.body;
  todoModel
    .updateOne({ _id: id }, { $set: { name: name } })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};
// import functions to use them in routes folder
module.exports = { createTodo, getTodos, deleteTodo, updateTodo,getTodoById };

