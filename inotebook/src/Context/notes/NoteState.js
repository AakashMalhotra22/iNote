import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = []

    const [notes, setnotes] = useState(notesInitial);

    //fetch All Notes
    const getNotes = async() => {
        // API CALL 
        console.log("hi");
        const response = await fetch(`${host}/api/v1/notes/fetchallnotes`, {
            method: 'GET',
            headers:
            {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        })
        const json = await response.json();
        setnotes(json.notes);
    }
    
    //Add a note
    const addNote = async(title, description, tag) => {
        // API CALL 
        const response = await fetch(`${host}/api/v1/notes/addnote`, {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title,description,tag})
        })
        const note = await response.json();
        setnotes(notes.concat(note));

    }
    // Delete a note
    const deleteNote = async (id) => {
        
        const response = await fetch(`${host}/api/v1/notes/updatenote/${id}`, {
            method: 'DELETE',
            headers:
            {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        })
        const json = response.json();
        console.log(json);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setnotes(newNotes);

    }
    // Edit a note

    const editNote = async (id, title, description, tag) => {
        // API CALL 
        const response = await fetch(`${host}/api/v1/notes/updatenote/${id}`, {
            method: 'PUT',
            headers:
            {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title,description,tag})
        })

        const json = response.json();
        // Logic to edit in Client
        let newNotes1 = JSON.parse(JSON.stringify(notes));

        for (let index = 0; index < newNotes1.length; index++) {
            const element = newNotes1[index];
            if (element._id === id) {
                console.log(id);
                newNotes1[index].title = title;
                newNotes1[index].description = description;
                newNotes1[index].tag = tag;
                break;
            }
        }

        setnotes(newNotes1);
    }

    return (
        <NoteContext.Provider value={{ notes, setnotes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;