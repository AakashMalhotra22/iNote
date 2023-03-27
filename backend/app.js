 const express = require('express');
 const connectDB = require('./db/connect');
 require('dotenv').config()
 const router = require('./routes/main');
 const app = express();


app.use('/api/v1',router);

app.get('/',(req,res)=>
{
    res.send("hi");
})


const port =3000;
const start = async ()=>
{
    try{
        await connectDB(process.env.MONGO_URI);
        console.log("MONGO is Connected")
        app.listen(port,()=>
        {
            console.log(`Server is listening on Port ${port}`)
        })
    }
    catch (error){
        console.log(error);
    }
}
console.log("hi");

start();