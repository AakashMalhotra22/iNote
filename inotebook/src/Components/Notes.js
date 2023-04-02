import React, { useContext } from 'react'
import NoteContext from '../Context/notes/NoteContext'
import NoteItem from './NoteItem';
 
const Notes = () => {
  const context = useContext(NoteContext);
  const {notes, addNote} = context;
  return (
    <div className="container">
      <div className= "row my-3">
      <h2>Your Notes</h2>
      {
        notes.map((note)=>
        {
            return <NoteItem key = {note._id} note = {note}/>
        })
      }
      </div>
    </div> 
  )
}

export default Notes
