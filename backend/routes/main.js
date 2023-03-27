const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.route('/auth').post((req,res)=>
{
    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send("Welcome to auth");
})

router.route('/notes').get((req,res)=>
{
    res.send("Welcome to notes");
})

module.exports = router;