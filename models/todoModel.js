import mongoose from "mongoose";



const Todo = mongoose.model("Todo", new mongoose.Schema({
    title:{
     type:String,
    },
    description:{
     type:String,
    },
    completed:{
     type:Boolean,
     default:false
    },
    date:{
    type:Date,
    default: Date.now
    }
 }))

 export default Todo;