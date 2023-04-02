import './App.css';
import React from 'react';

import Navbar from './Components/Navbar';

import Home from './Components/Home'

import {
  HashRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import NoteState from './Context/notes/NoteState';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <>
    <NoteState>
        <Router>
        <Navbar/>

        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path ="/login" element ={<Login/>}/>
          <Route path ="/signup" element ={<Signup/>}/>
        
        </Routes> 

        </Router> 
    </NoteState>
    </>
  );
}

export default App;
