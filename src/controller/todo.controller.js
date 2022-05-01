const { findByIdAndDelete } = require("../model/todo.model");
const TodoModel = require("../model/todo.model");

const getTodo = (req,res) =>{
    TodoModel.find()
    .then(docs =>{
        return res.send(docs)
    }).catch(console.log)
}

const postTodo = (req,res) =>{
    const todo = new TodoModel(req.body);
    todo.save()
    .then(result=> {
        return res.send(result);
     }).catch(err =>{
         return res.send({err})
     })
    }

    const getTodoId = (req,res) =>{
        const {todoID} = req.params;
        console.log(todoID);
        TodoModel.findById(todoID)
        .then(doc =>{
            return res.send(doc)
        }).catch(err => res.send({err}))
    }

    const patchTodoId =(req,res)=>{
        const {todoId}= req.params;
        console.log(req.body);
        TodoModel.findByIdAndUpdate(todoId,{...req.body})
        .then(result => {
             return res.send(result)
            })
        .catch(err => console.log({err}))
    }


        
 
    const deleteTodoId=(req,res)=>{
        const{todoId} = req.params;
        TodoModel.findByIdAndDelete(todoId)
        .then(result => res.send(result))
        .catch(err =>res.send({err}))
    }

    module.exports={
        getTodo,postTodo,getTodoId,patchTodoId,deleteTodoId
    }
