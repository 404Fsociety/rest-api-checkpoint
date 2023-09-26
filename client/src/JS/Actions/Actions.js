import {FAIL_CONTACT, GET_ONE_CONTACT, LOAD_CONTACT, SUCCESS_CONTACT} from '../ActionTypes/ActionTypes'
import axios from 'axios'


//get all contacts
export const getContacts = () => async (dispatch) => {
    dispatch({type: LOAD_CONTACT})
    try {
        const contacts = await axios.get('/api/contacts/get_contacts')
        dispatch({type : SUCCESS_CONTACT, payload : contacts.data})
    } catch (error) {
        dispatch ({type :   FAIL_CONTACT, payload: error.response})
    }
}

//add new contact
export const addContact = (newContact) => async (dispatch) => {
    try {
        const result = await axios.post('/api/contacts/add_contact',newContact)
        dispatch ({type : SUCCESS_CONTACT,payload: result.data})
        dispatch (getContacts())
    } catch (error) {
        dispatch ({type :   FAIL_CONTACT, payload: error.response})
    }
}

//delete contact
export const deleteContact = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/contacts/delete_contact/${id}`)
        dispatch (getContacts())
    } catch (error) {
        dispatch ({type :   FAIL_CONTACT, payload: error.response})
    }
}

//get one contact
export const getOneContact = (id) => async (dispatch) =>{
    dispatch({type : LOAD_CONTACT})
    try {
        const details = await axios.get(`/api/contacts/get_contact_By_Id/${id}`)
        dispatch ({type: GET_ONE_CONTACT, payload:details.data})
    } catch (error) {
        dispatch ({type :   FAIL_CONTACT, payload: error.response})
    }
}

//edit contact
export const editContact = (id, newContact) => async (dispatch) => {
    try {
        await axios.put(`/api/contacts/edit_contact/${id}`,newContact)
        dispatch(getContacts())
    } catch (error) {
        dispatch ({type :   FAIL_CONTACT, payload: error.response})
    }
}