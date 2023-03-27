const express = require('express');
const router = express.Router();

router.route('/auth').get((req,res)=>
{
    res.send("Welcome to auth");
})

router.route('/notes').get((req,res)=>
{
    res.send("Welcome to notes");
})

module.exports = router;