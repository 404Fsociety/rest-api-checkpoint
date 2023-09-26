import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getContacts } from '../../JS/Actions/Actions'
import ContactCard from '../ContactCard/ContactCard'
const ContactList = () => {
  const contactList = useSelector(state=> state.listContacts)
  const load = useSelector(state =>state.load)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getContacts())
  },[dispatch])

  return (
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",paddingTop:"3rem"}}>
      {
        load?(<h1 style={{color:"red",height:"900px"}}>loading...</h1>)
        :
        contactList? contactList.map((contact)=>
          <ContactCard contact = {contact} key={contact._id}/>
        )
        :
        <h2>Contact list empty</h2>
      }
    </div>
  )
}

export default ContactList