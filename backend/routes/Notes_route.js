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



module.exports = router;