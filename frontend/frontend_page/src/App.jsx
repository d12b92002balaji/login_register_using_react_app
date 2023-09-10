import * as React from 'react';
import Register from './pages/Register';
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/login';
import Dummy from './pages/dummy';

function App() {

 

  return (
  
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/dummy' element={<Dummy/>}/>
  </Routes>
  </BrowserRouter>
  
 
  
  
  </>
   
  )
}

export default App
