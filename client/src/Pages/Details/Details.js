import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMatch, useNavigate } from 'react-router-dom'
import { getOneContact } from '../../JS/Actions/Actions'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Details = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const foundContact = useSelector((state) => state.oneContact)
    const match = useMatch('/details/:id')

    useEffect( () => {
        dispatch(getOneContact(match.params.id))
    }, [dispatch, match.params.id])

    console.log(foundContact)
  return (
    <div>
        <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
      <Card.Body>
        <Card.Title>{foundContact.name}</Card.Title>
        <Card.Text>{foundContact.email}</Card.Text>
        <Card.Text>{foundContact.phone}</Card.Text>
        <Button variant="success" onClick={()=>navigate(`/edit_contact/${foundContact._id}`)}>Edit</Button>
        <Button variant="danger" onClick={()=>navigate(-1)}>Back</Button>

      </Card.Body>
    </Card>

    </div>
  )
}

export default Details