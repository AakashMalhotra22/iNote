const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const fetchuser = async (req,res,next)=>
{
    const token = req.header('auth-token');
    if(!token)
    {
        res.status(401).send("unauthorized token");  
    }
    const data = jwt.verify(token,process.env.JWT_SECRET);
    req.user = data.user

    next();
}

module.exports = fetchuser