import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { deleteContact } from '../../JS/Actions/Actions';


const ContactCard = ({contact}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div>
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>{contact.email}</Card.Text>
        <Card.Text>{contact.phone}</Card.Text>
        <Button variant="success" onClick={()=>navigate(`/edit_contact/${contact._id}`)}>Edit</Button>
        <Button variant="danger" onClick={()=>dispatch(deleteContact(contact._id))}>Delete</Button>
        <Button variant="primary" onClick={()=>navigate(`/details/${contact._id}`)} >more...</Button>

      </Card.Body>
    </Card>

    </div>
  )
}

export default ContactCard