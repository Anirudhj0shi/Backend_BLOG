import express from 'express'
import { config } from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './router/user.js'
import bodyParser from 'express'

const app = express();

//Creating config file
config({
    path:'.env',
});

app.use(bodyParser.json());

//userRouter
app.use('/api',userRouter);

//DB Connection 
mongoose.connect(process.env.MONGO_URL,{
    dbName:"Blogging_MERN_Volcanus"
}).then(()=>console.log("MongoDB is Connected...!"));

//Server Setup
const port = process.env.PORT;
app.listen(port,()=>console.log(`Server is running on port ${port}`));



//mene changes kr diye h 
