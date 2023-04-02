import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{
    
    const notesInitial =[
            {
                "_id": "6429034185ad8ff556508cr2",
                "user": "642902f885ad8ff5565080ce",
                "title": "Sister' Marriage",
                "description": "Check out for things",
                "tag": "Responsibility",
                "date": "2023-04-02T04:23:29.166Z",
                "__v": 0
            },
            {
                "_id": "6429035e85ad8ff556508kl4",
                "user": "642902f885ad8ff5565080ce",
                "title": "Friends work",
                "description": "address him",
                "tag": "work",
                "date": "2023-04-02T04:23:58.367Z",
                "__v": 0
            },
            {
                "_id": "6429035e85ad8ff55650i0c4",
                "user": "642902f885ad8ff5565080ce",
                "title": "Fire work",
                "description": "address him",
                "tag": "work",
                "date": "2023-04-02T04:23:58.367Z",
                "__v": 0
            },
            {
                "_id": "6429035e85ad8ff5565k80d5",
                "user": "642902f885ad8ff5565080ce",
                "title": "Loyal work",
                "description": "address him",
                "tag": "work",
                "date": "2023-04-02T04:23:58.367Z",
                "__v": 0
            },
            {
                "_id": "6429035e85ad8ff5545080d9",
                "user": "642902f885ad8ff5565080ce",
                "title": "Friends work",
                "description": "address him",
                "tag": "work",
                "date": "2023-04-02T04:23:58.367Z",
                "__v": 0
            }
        ]

    const [notes, setnotes] = useState(notesInitial);
    //Add a note

    const addNote =(title,description, tag)=>
    {
        const note =  
        {
            "_id": "6429035e85ad8ff5545083d9",
            "user": "642902f885ad8ff5565080ce",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-04-02T04:23:58.367Z",
            "__v": 0
        }
        setnotes(notes.concat(note));

    }
    // Delete a note
    const deleteNote = (id)=>
    {
        const newNotes = notes.filter((note)=>{return note._id !== id})
        console.log("Delete the id " +id);
        setnotes(newNotes);

    }
    // Edit a note

    const editNote = ()=>
    {

    }

    return (
        <NoteContext.Provider value = {{notes, setnotes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;