import React, { useContext } from 'react'
import NoteContext from '../Context/notes/NoteContext'
import AddNote from './AddNote';
import Notes from './Notes';


const Home = () => {
  const context = useContext(NoteContext);
  const {notes,setNotes} = context;
  return (
    <>
    <div className="container my-3">
      <AddNote/>
      </div>
      <Notes/>
    </>

    
  )
}

export default Home
