import express from 'express'
import { config } from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './router/user.js'
import bodyParser from 'express'
import {postRouter} from './router/post.js'

const app = express();

//Creating config file
config({
    path:'.env',
});

app.use(bodyParser.json());

//userRouter
app.use('/api',userRouter);

//PostRouter
app.use('/api',postRouter);

//DB Connection 
mongoose.connect(process.env.MONGO_URL,{
    dbName:"Blogging_MERN_Volcanus"
}).then(()=>console.log("MongoDB is Connected...!"));

//Server Setup
const port = process.env.PORT;
app.listen(port,()=>console.log(`Server is running on port ${port}`));


