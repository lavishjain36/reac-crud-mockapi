import React, { useEffect, useState } from 'react'
import "./Dashboard.css";
import {FaUserCircle} from "react-icons/fa"
import {BsEyeFill, BsPencil, BsTrash} from "react-icons/bs"
import {Link} from "react-router-dom"
import axios from "axios"

import { Button, ButtonGroup, ButtonToolbar, ListGroup, ListGroupItem, Spinner } from 'reactstrap';
const Dashboard=()=> {
    const [id,setId]=useState(0)
    const [users,setUser]=useState([]);
    const [loading,setLoading]=useState(true);
    const [deleteLoading,setDeleteLoading]=useState(false);


const getUsers=async()=>{
    const url="https://638a1152c5356b25a2112761.mockapi.io/Users"

    try {
        await axios.get(url).then(({data})=>setUser(data));
        setLoading(false)
        
    } catch (error) {
        console.log(error)
    }
}

const deleteUser=async(userId)=>{
    const url=`https://638a1152c5356b25a2112761.mockapi.io/Users/${userId}`;
    
    setDeleteLoading(true);
    setId(userId);
    try {
        await axios.delete(url)
        getUsers();//calling getUsers method to load the data 
        setDeleteLoading(false);
    } catch (error) {
        console.log(error)
    }
}

useEffect(()=>{
    getUsers();
},[])

  return (
    <div className='d-flex' my-5 container-fluid col-sm-6 offset-sm-2 offset-lg-4>
   <ListGroup>
   {loading?(
    <Spinner className='m-5 color="dark'>
        Loading...
    </Spinner>
   ):(
    <>
    <ListGroupItem className="d-flex justify-content-between">
    <span className="fw-bold my-auto">User List</span>
    <Link to="/create">
        <Button color="primary">Add User+</Button>
    </Link>
   </ListGroupItem>
    
    {users.map((user)=>(
   <ListGroupItem
     className='d-flex justify-content-between'
     >
     <div className='d-flex me-5'>
        <Button color="none" className="outline-none">
            <Link to={"/profile/"+user.id}>
                <FaUserCircle className="fs-3 mx-3 my-auto text-dark"/>
            </Link>
        </Button>

        <div>
            {user.name}
            <br/>
            <span className="text-primary">{user.email}</span>
        </div>
     </div>

     <ButtonToolbar>
        <ButtonGroup className="me-2">
            <Button color="link" className='outline-none'>
                <Link to={"/profile/"+user.id}>
                    <BsEyeFill className="text-success"/>
                </Link>
            </Button>

            <Button color="link" className='outline-none'>
                <Link to={"/edit/"+user.id}>
                    <BsPencil className="text-primary"/>
                </Link>
            </Button>

            <Button color="link" className='outline-none'>
                 {id===user.id&&deleteLoading?(
                    <Spinner color="danger" type="grow" size="sm">
                        Loading...
                    </Spinner>
                 ):(
                    <BsTrash className="text-danger"
                        onClick={()=>deleteUser(user.id)}
                    />
                 
                 )}   
            </Button>
        </ButtonGroup>
     </ButtonToolbar>
     </ListGroupItem>
    ))}
    </>
   )}    
</ListGroup>
</div>
  )
}

export default Dashboard