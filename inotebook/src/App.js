import './App.css';
import React from 'react';

import Navbar from './Components/Navbar';
import About from './Components/About'
import Home from './Components/Home'

import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NoteState from './Context/notes/NoteState';

function App() {
  return (
    <>
    <NoteState>
    
    
        <Router>
        <Navbar />
        
        
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path ="/about" element = {<About/>}/>
        
        </Routes> 

        </Router> 
        </NoteState>
    </>
  );
}

export default App;
