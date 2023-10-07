const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/task")
const Task=mongoose.model('Task',{
    id:String,
    name:String,
    task:String,
    image:String
  
})
module.exports={
    Task
}