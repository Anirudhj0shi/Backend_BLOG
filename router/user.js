import express from 'express'
import {register} from '../controllers/user.js'

const router = express.Router();

router.get('/',(req,res)=>res.json({message:"This is home Route"}));

router.post('/register',register);

export default router;