require('dotenv').config()
require('express-async-errors');
 
 const express = require('express');
 const app = express();

 const connectDB = require('./db/connect');
 const router = require('./routes/main');
 const errorMiddleware = require('./middleware/error-handler');


app.use(express.json());
app.use('/api/v1',router);
app.use(errorMiddleware);



const port =5000;
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