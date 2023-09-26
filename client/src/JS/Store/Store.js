import { applyMiddleware,compose,createStore } from "redux";
import contactReducer from "../Reducers/ContactReducer";
import thunk from 'redux-thunk'


const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const store = createStore(contactReducer,composeEnhancers(applyMiddleware(thunk)))

export default store