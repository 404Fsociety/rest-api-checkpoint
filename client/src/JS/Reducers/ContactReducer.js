import { FAIL_CONTACT, SUCCESS_CONTACT, LOAD_CONTACT, GET_ONE_CONTACT } from "../ActionTypes/ActionTypes"


//initialState
const initialState = {
    listContacts : [],
    load : false,
    errors : null,
    success : null,
    oneContact: {}
}

// pure function 
const contactReducer = (state=initialState, {type, payload}) => {
    switch (type ) {
        case LOAD_CONTACT:
            return {...state, load : true, oneContact:{}}

        case SUCCESS_CONTACT:
            return {...state, load: false, listContacts: payload, success: payload.success, oneContact:{}}    
        
        case FAIL_CONTACT:
            return {...state, load: false, errors: payload.errors, oneContact:{}}   
            
        case GET_ONE_CONTACT:
            return {...state, oneContact: payload}
        default:
            return state
    }
}



//export reducer
export default contactReducer