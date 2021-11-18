const express = require("express");
// import db from db folder
const db = require("./db/db");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
dotenv.config();

//import todo route
const todoRouter = require("./router/routes/todo");
app.use("/todo", todoRouter);

port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
