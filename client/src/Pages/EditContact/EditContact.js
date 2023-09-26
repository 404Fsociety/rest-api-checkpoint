import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMatch, useNavigate } from 'react-router-dom'
import { editContact, getOneContact } from '../../JS/Actions/Actions'
import { Button, Container, Form } from 'react-bootstrap'

const EditContact = () => {

  const [updateContact,setUpdateContact] = useState({})

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const foundContact = useSelector((state) => state.oneContact)
  const match = useMatch('/edit_contact/:id')

  useEffect( () => {
      dispatch(getOneContact(match.params.id))
  }, [dispatch, match.params.id])

  const handleChange = (e) =>{
    setUpdateContact({...updateContact,[e.target.name] : e.target.value})
  }

  const edit = () => {
    dispatch(editContact(match.params.id,updateContact))
    navigate(-1)
  }

  return (
    <div style={{background:"rgb(201, 191, 171)",height:"700px",padding:"4rem 22rem"}}>
      <h1 style={{marginBottom:"4rem"}}>Edit contact : {foundContact.name}</h1>
      <Container>
        <Form style={{textAlign:"left"}}>
          <Form.Label>Name :</Form.Label>
          <Form.Control style={{marginBottom:"1rem"}} name='name' placeholder={foundContact.name} onChange={handleChange}/>

          <Form.Label>Email :</Form.Label>
          <Form.Control style={{marginBottom:"1rem"}} name='email' placeholder={foundContact.email} onChange={handleChange} />

          <Form.Label>Phone :</Form.Label>
          <Form.Control name='phone' placeholder={foundContact.phone} onChange={handleChange}/>

          <div style={{marginTop:"2rem",textAlign:"end"}}>
          <Button style={{width:"8rem",background:"green",borderColor:"black"}} onClick={()=>edit()} >Confirm</Button>
          </div>

        </Form>
      </Container>
    </div>
  )
}

export default EditContact