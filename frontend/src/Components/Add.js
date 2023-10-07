import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

function Add() {
    const [id,setId]=useState('')
  const [name,setName]=useState('')
  const [task,setTask]=useState('')
  let use =useNavigate()
  const [image,setImage]=useState('')

useEffect(()=>{
    setId(uuid())
},[])

 const addTask=async(e)=>{
    e.preventDefault()
    // const formData=new FormData()
    // formData.append('image',image)
    const body={
        id,
        name,
        task,
       image
    }
   const result= await axios.post('http://localhost:5000/addTask',body)
   alert(result.data.message)
   use("/")
  }

    return (
    <>
   
    <Form className='card p-5 w-50 container text-center'  style={{
       margin:"auto",
       marginTop:'150px'

    }}><h2>Add Task</h2>
       <Form.Group className="mb-3" controlId="name"  style={{textAlign:"left"}}>
   <Form.Label>Name</Form.Label>
   <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter you name" />
 </Form.Group>
<Form.Group className="mb-3" controlId="task"  style={{textAlign:"left"}}>
   <Form.Label>Task</Form.Label>
   <Form.Control  onChange={(e)=>setTask(e.target.value)} type="text" placeholder="Task" />
 </Form.Group>
 <label style={{textAlign:'start',color:'red',text:'bold'}}>Upload Image</label>
 <input type="file" name='file' onChange={(e)=>setImage(e.target.value)} />
 
 <Button style={{marginTop:'10px'}} variant="primary" type="submit" onClick={(e)=>addTask(e)}>
   Add Task
 </Button>

</Form>
</>
  )
}

export default Add