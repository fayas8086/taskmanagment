import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [task,setTask]=useState([])
  const taskList =async()=>{
   const result= await axios.get('http://localhost:5000/taskList')
 setTask(result.data.message)

 }
 const delet = async(id)=>{
  const result =await axios.delete('http://localhost:5000/delete/'+id)
alert(result.data.message)
taskList()

 }
 useEffect(()=>{
  taskList()
 },[]

 )

  return (
    <div style={{padding:'50px'}}>
      <h1 style={{marginBottom:'20px'}}> Task Management System</h1>
            <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Task</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {task?.map((item,index)=>(

       
       <tr>
        <td>{index+1}</td>
        <td>{item.name}</td>
        <td>{item.task}</td>
        <td>{item.image}</td>
        <td>
          <Link to={"edit/"+item.id}>
          <button style={{background:'green',color:'white',borderRadius:'6px',marginRight:'5px'}}>Edit Task</button>
          </Link>
          
          <button style={{background:'red',color:'white',borderRadius:'6px',}} onClick={()=>delet(item.id)}>Delete</button>
        </td>

       </tr>
        ))}
            </tbody>
    </Table>
<Link to="/add">
    <button style={{width:"200px",border:"none",color:"white",background:"rgb(44,48,52)",height:"40px",borderRadius:"7px"}}>Add Task</button>
    </Link>
    </div>
  )
}

export default Home