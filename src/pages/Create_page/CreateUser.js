import React,{useState} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { Button, Col, Form,FormGroup, Input, Label, Row, Spinner } from 'reactstrap';


const CreateUser=()=> {
  const [updateLoading,setUpdateLoading]=useState(false);
  const [userData,setUserData]=useState({
    name:"",
    email:"",
    department:"",
    country:""
  })
  const navigate=useNavigate();

  const userDataHanlder=(event)=>{
    setUserData({...userData,[event.target.name]:event.target.value});
    console.log(userData)
  }
  const submitHandler=async()=>{
    const url="https://638a1152c5356b25a2112761.mockapi.io/Users";
    setUpdateLoading(true);
    try {
      await axios.post(url,userData);
      console.log(userData)
      setUpdateLoading(false);
      navigate('/')
    } catch (error) {
      console.log(error)
    }

  }
  return (
  <Form inline className='container mt-5 w-50'>
  <FormGroup className='mb-2 me-sm-2 mb-sm-0'>
    <Label for="name" className='me-sm-2'>
      Username
    </Label>
    <Input
      id="name"
      name="name"
      placeholder="Mr.Mahesh"
      type="text"
      value={userData.name}
      onChange={userDataHanlder}
    />
  </FormGroup>
  <FormGroup className='mb-2 me-sm-2 mb-sm-0 mt-3'>
    <Label for="email" className='me-sm-2'>
      Email
    </Label>
    <Input
      id="email"
      name="email"
      placeholder="mahesh@gmail.com"
      type="email"
      value={userData.email}
      onChange={userDataHanlder}
    />
  </FormGroup>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="department">
          Department
        </Label>
        <Input
          id="department"
          name="department"
          placeholder="books"
          type="text"
          value={userData.department}
         onChange={userDataHanlder}
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="country">
         Country
        </Label>
        <Input
          id="country"
          name="country"
          placeholder="India"
          value={userData.country}
          onChange={userDataHanlder}
        />
      </FormGroup>
    </Col>
  </Row>
     {updateLoading?(
      <>
      <Button color="success" disabled>
        <Spinner size="sm">Loading...</Spinner>
        <span>Creating</span>
      </Button>
      </>
     ):(
      <Button color="success" className="mt-3" onClick={submitHandler}>
        Create
      </Button>
     )}
</Form>
  )
}

export default CreateUser