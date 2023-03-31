const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET ='Harryisagoodb$oy'

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
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt);

    user = await User.create(
    {
      name: req.body.name,
      email:req.body.email,
      password: secPass,
    })
    const data =
    {
        user:
        {
            id:user.id
        }
    }
    const authtoken = jwt.sign(data,JWT_SECRET);
    console.log(authtoken);

    res.json({"message":"user is created", "details":req.body, "Encrypted password": secPass});
})

router.route('/login').post([
    body('email', 'Enter a valid email').isEmail(),
    body('password','Password cannot be blank').exists(),
],async (req,res)=>
{
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw errors;

    const {email,password} = req.body;

    let user = await User.findOne({email:req.body.email});
    if(!user)
    {
        return res.status(400).send("User already exists");
    }
    const passwordCompare = await bcrypt.compare(password,user.password);
    if(!passwordCompare)
    {
        return res.status(400).send("Wrong Password");
    }

    const data =
    {
        user:
        {
            id:user.id
        }
    }
    const authtoken = jwt.sign(data,JWT_SECRET);
    res.json({'welcome':"you made it", authtoken});
})

router.route('/notes').get((req,res)=>
{
    res.send("Welcome to notes");
})

module.exports = router;