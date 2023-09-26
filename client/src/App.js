import './App.css';
import Navigation from './Components/Navigation/Navigation';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contacts from './Pages/Contacts/Contacts'
import AddContact from './Pages/AddContact/AddContact';
import EditContact from './Pages/EditContact/EditContact';
import Details from './Pages/Details/Details';
import ErrorPage from './Pages/Errors/ErrorPage';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/add_contact' element={<AddContact/>} />
        <Route path='/details/:id' element={<Details/>} />
        <Route path='/edit_contact/:id' element={<EditContact/>} />
        <Route path='/*' element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
