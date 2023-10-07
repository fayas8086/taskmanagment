import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./edit.css"
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate, useParams } from 'react-router-dom';


function Edit() {
    const [id,setId]=useState()
    const [name,setName]=useState()
    const [task,setTask]=useState()
    const [image,setImage]=useState()

    const params=useParams()
  const use =useNavigate()
    const para = async()=>{
      const result= await axios.get('http://localhost:5000/getTask/'+params.id)
      setId(result.data.message.id)
      setName(result.data.message.name)
      setTask(result.data.message.task)
      setImage(result.data.message.image)
    }
    useEffect(()=>{para()
    },[])
    const update=async(e)=>{
        e.preventDefault()
        const body={
            id,
            name,
            task,
            image
        }
       const result= await axios.post('http://localhost:5000/update',body)
       alert(result.data.message)
       use("/")
     }


  return (
    <>
   
         <Form className='card p-5 w-50 container text-center'  style={{
            margin:"auto", marginTop:'150px'

         }}><h2 style={{color:'blue',textDecoration:"bold"}}>Edit Task</h2>
      <Form.Group className="mb-3" controlId="name" style={{textAlign:"left"}}>
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Enter you name" />
      </Form.Group>
     <Form.Group className="mb-3" controlId="task" style={{textAlign:'start'}}>
        <Form.Label>Task</Form.Label>
        <Form.Control onChange={(e)=>setTask(e.target.value)} value={task}  type="text" placeholder="Task" />
      </Form.Group>
     <label style={{textAlign:'start',color:'red',text:'bold'}}>Upload Image</label>
 <input type="file" name='file'  onChange={(e)=>setImage(e.target.value)}  />
      <div style={{display:"flex",justifyContent:'space-around',marginTop:'20px'}}>
      <Button onClick={(e)=>update(e)} variant="primary" type="submit" >
        Update
      </Button>
      <Link to="/"> 
      <Button  variant="primary" type="submit">
        Cancel
      </Button>
      </Link>
      </div>
    </Form>
    </>
  )
}

export default Edit