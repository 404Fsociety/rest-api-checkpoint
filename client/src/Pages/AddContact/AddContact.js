import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Container,Form,Button} from 'react-bootstrap'
import { addContact } from '../../JS/Actions/Actions'

const AddContact = () => {

  const [newContact,setNewContact] = useState({})

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleChange = (e) =>{
    setNewContact({...newContact,[e.target.name] : e.target.value})
  }
  const add = () => {
    dispatch(addContact(newContact))
    navigate('/contacts')
  }
  console.log(newContact)
  return (
    <div style={{padding:"3rem 20rem",height:"700px",width:"100%",background:"rgb(171, 180, 201)"}}>
      <h1>Add New contact</h1>
      <Container>
        <Form style={{textAlign:"left"}}>
          <Form.Label>Name :</Form.Label>
          <Form.Control style={{marginBottom:"1rem"}} name='name' onChange={handleChange}/>

          <Form.Label>Email :</Form.Label>
          <Form.Control style={{marginBottom:"1rem"}} name='email' onChange={handleChange}/>

          <Form.Label>Phone :</Form.Label>
          <Form.Control name='phone' onChange={handleChange}/>
          <div style={{marginTop:"2rem",textAlign:"end"}}>
          <Button style={{width:"8rem",background:"green",borderColor:"black"}} onClick={()=>add()}>Confirm</Button>
          </div>

        </Form>
      </Container>
    </div>
  )
}

export default AddContact