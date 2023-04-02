import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{
    
    const notesInitial =[
            {
                "_id": "6429034185ad8ff5565080d2",
                "user": "642902f885ad8ff5565080ce",
                "title": "sister' Marriage",
                "description": "Check out for things",
                "tag": "Responsibility",
                "date": "2023-04-02T04:23:29.166Z",
                "__v": 0
            },
            {
                "_id": "6429035e85ad8ff5565080d4",
                "user": "642902f885ad8ff5565080ce",
                "title": "friends work",
                "description": "address him",
                "tag": "work",
                "date": "2023-04-02T04:23:58.367Z",
                "__v": 0
            }
        ]
    const [notes, setnotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value = {{notes, setnotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;