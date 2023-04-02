import React,{useContext} from 'react'
import NoteContext from '../Context/notes/NoteContext'

const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const {deleteNote} = context;
    const { note,updateNote} = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa fa-trash-o mx-3" aria-hidden="true" onClick={()=>{deleteNote(note._id)}}></i>
                    <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={()=>{updateNote(note)}}></i>
                </div>
            </div>

        </div>
    )
}

export default NoteItem
