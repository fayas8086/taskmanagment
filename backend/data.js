const db= require('./db')
const addTask=(id,name,task,image)=>{
  return  db.Task.findOne({id}).then(data=>{
        if(data){
            return{
                statusCode:404,
                message:'This task is already exisited'
            }
        }
        else{
            const add = new db.Task({
                id,
                name,
                task,
                image
             
            })
            add.save()
            return{
                statusCode:202,
                message:'Task is generated'
            }
        }

    })
}

const updateTask =(id,name,task)=>{
    return db.Task.findOne({id}).then(data=>{
        if(data){
            data.id=id
            data.name=name
            data.task=task
         data.save()
          return{
            statusCode:202,
            message:'Task is updated'
        }

        }
else{
    return{
        statusCode:404,
        message:'This task is not updated'
    }
}
    })
}


const taskType = ()=>{
    return db.Task.find().then(data=>{
        if(data){
            return{
                statusCode:202,
                message:data
            } 
        }
        else{
            return{
                statusCode:400,
                message:'this  data is not  avilable'
            } 
        }
    })
}
const getAtask = (id)=>{
    return db.Task.findOne({id}).then(data=>{
        if(data){
            return{
                statusCode:202,
                message:data
            } 
        }
        else{
            return{
                statusCode:400,
                message:'Id is not valid'
            } 
        }
    })
}
const delet = (id)=>{
    return db.Task.deleteOne({id}).then(data=>{
        if(data){
            return{
                statusCode:200,
                message:"Task Deleted"
            }
        }
        else{
            return{
                statusCode:400,
                message:"Task is not present"
            }
        }
    })
}

module.exports={
    addTask,
    taskType,
    getAtask,
    updateTask,
    delet
}