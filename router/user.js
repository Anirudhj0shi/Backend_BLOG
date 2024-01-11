import express from 'express'
import {register,login, getAllUsers} from '../controllers/user.js'
import { verifyToken } from "../middlewares/auth.js"

const router = express.Router();

router.get('/',(req,res)=>res.json({message:"This is home Route"}));

router.post('/register',register);

router.post('/login',login);

router.get('/users',getAllUsers);

router.get('/superman',verifyToken,(req,res)=>res.json({message:"This is superman Route...!",data:req.user}))

export default router;