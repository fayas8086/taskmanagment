const express =require('express')
const data =require('./data')
const app = express()

const cors = require('cors')
app.use(cors({origin:'http://localhost:3000'}))
app.use(express.json())
app.post('/addTask',(req,res)=>{
data.addTask(req.body.id,req.body.name,req.body.task,req.body.image).then(data=>{
    res.status(data.statusCode)
    .json(data)
})
})

app.post('/update',(req,res)=>{
    data.updateTask(req.body.id,req.body.name,req.body.task).then(data=>{
        res.status(data.statusCode)
        .json(data)
    })
    })

    app.get('/taskList',(req,res)=>{
        data.taskType().then(data=>{
            res.status(data.statusCode)
            .json(data)
        })
        })

        app.get('/getTask/:id',(req,res)=>{
            data.getAtask(req.params.id).then(data=>{
                res.status(data.statusCode)
                .json(data)
            })
            })
            app.delete('/delete/:id',(req,res)=>{
                data.delet(req.params.id).then(data=>{
                    res.status(data.statusCode)
                    .json(data)
                })
                })
app.listen(5000,()=>{
    console.log("server stated 5000")
})

