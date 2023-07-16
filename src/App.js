import React from 'react';
import AddUser from './components/pages/user/AddUser';
import NavBar from './components/layouts/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ShowUser from './components/pages/user/ShowUser';
import UpdateUser from './components/pages/user/UpdateUser';
import DeleteUser from './components/pages/user/DeleteUser';
import ViewUser from './components/pages/user/ViewUser';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/user/add' element={<AddUser/>}/>
    <Route path='/user/show' element={<ShowUser/>}/>
    <Route path='/user/update/:userId' element={<UpdateUser/>}/>
    <Route path='/user/delete/:userId' element={<DeleteUser/>}/>
    <Route path='/user/view/:userId' element={<ViewUser/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App