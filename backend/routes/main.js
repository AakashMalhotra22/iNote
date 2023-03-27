const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');


router.route('/createuser').post([
    body('name').isLength({min:3}),
    body('email').isEmail(),
    body('password').isLength({min:5}),
],async (req,res)=>
{
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw errors;

    let user = await User.findOne({email:req.body.email});
    if(user)
    {
        return res.status(400).send("User already exists");
    }
    await User.create(
    {
      name: req.body.name,
      email:req.body.email,
      password: req.body.password,
    })
    res.json({"message":"user is created", "details":req.body});
})

router.route('/notes').get((req,res)=>
{
    res.send("Welcome to notes");
})

module.exports = router;