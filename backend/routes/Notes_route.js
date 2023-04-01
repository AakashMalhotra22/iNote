const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes');
require('express-async-errors');

const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');

router.get('/fetchallnotes',fetchuser, async (req,res)=>
{
    const notes = await Notes.find({user:req.user.id});
    res.json({notes});

})

router.post('/addnote',fetchuser,[
    body('title').isLength({min:3}),
    body('description').isLength({min:5}),
], async (req,res)=>
{ 
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw errors;

    const {title,description,tag} = req.body;

    const note = new Notes(
    {
        title,description,tag,user:req.user.id
    })
    console.log("hi1");
    const savedNote = await note.save();
    res.json(savedNote);
})

router.put('/updatenote/:id',fetchuser, async (req,res)=>
{ 
    const {title,description,tag} = req.body;

    const newNote ={}
    if(title){newNote.title = title};
    if(description){newNote.description = description};
    if(tag) {newNote.tag = tag};

    let note = await Notes.findById(req.params.id)
    if(!note) 
    {
        return res.send(404).send("not found");
    }
    if(note.user.toString() != req.user.id)
    {
        return res.status(404).send("not allowed");
    }
    note = await Notes.findByIdAndUpdate(req.params.id,{$set: newNote}, {new:true});
    res.json({note});
})

router.delete('/updatenote/:id',fetchuser, async (req,res)=>
{ 
    const {title,description,tag} = req.body;

    let note = await Notes.findById(req.params.id)
    if(!note) 
    {
        return res.send(404).send("not found");
    }
    if(note.user.toString() != req.user.id)
    {
        return res.status(404).send("not allowed");
    }

    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({"success": "note has been deleted"});
})

module.exports = router;