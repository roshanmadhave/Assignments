const express= require("express");
const{getTodo,postTodo,getTodoId,patchTodoId,deleteTodoId}=require("../controller/todo.controller");

const TodoRouter = express.Router()

TodoRouter.route("/")
.get(getTodo)
.post(postTodo)

TodoRouter.route("/:todoId")
.get(getTodoId)
.patch(patchTodoId)
.delete(deleteTodoId)

module.exports= TodoRouter;
