const {Schema,model} =  require("mongoose")

const todoSchema =new Schema({
    title :{
        type : String,
        required:true
    },
    body :{
        type:String,
        required:true
    }
})

const TodoModel = model("Todo",todoSchema);

module.exports=TodoModel;