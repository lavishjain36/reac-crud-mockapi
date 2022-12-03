import React,{useState,useEffect} from 'react';
import { useHref, useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Col, Form, FormGroup, Input, Label, Row, Spinner } from 'reactstrap';


const Edit=()=> {
    const [profile,setProfile]=useState({
        name:"",
        email:"",
        department:"",
        country:""   
    })
    const [editLoading,setEditLoading] = useState(false)
    const {id}=useParams();
    const navigate=useNavigate()

useEffect(()=>{
    const editProfile=async()=>{
        try {
            const url=`https://638a1152c5356b25a2112761.mockapi.io/Users/${id}`;
            const {data}=await axios.get(url);
            console.log(data);
            setProfile({...data})
            
        } catch (error) {
            console.log(error)
        }
    };
    editProfile();
},[id])

const editDataHanlder=(event)=>{
    setProfile({...profile,[event.target.name]:event.target.value});
    console.log(profile)
  }

const profileHandler=async()=>{
    const url=`https://638a1152c5356b25a2112761.mockapi.io/Users/${id}`;
    setEditLoading(true);
    try {
        await axios.put(url,profile)
        console.log(profile)
        setEditLoading(false)
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
      value={profile.name}
      onChange={editDataHanlder}
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
      value={profile.email}
      onChange={editDataHanlder}
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
          value={profile.department}
         onChange={editDataHanlder}
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
          value={profile.country}
          onChange={editDataHanlder}
        />
      </FormGroup>
    </Col>
  </Row>
     {editLoading?(
      <>
      <Button color="warning" disabled>
        <Spinner size="sm">Loading...</Spinner>
        <span>Updating</span>
      </Button>
      </>
     ):(
      <Button color="warning" className="mt-3" onClick={profileHandler}>
        Update
      </Button>
     )}
</Form>
  )
}

export default Edit