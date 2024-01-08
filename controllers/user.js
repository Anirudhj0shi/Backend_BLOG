import { User } from "../Models/User.js";
import bcrypt from 'bcryptjs'


export const register = async (req,res) => {
    const { name, email, password } = req.body;

    // console.log(req.body);
    let user = await User.findOne({email});

    if(user) return res.json({message: "User is already registered    :(   "});

    const hashPassword =await bcrypt.hash(password,10);

         user = await User.create({name, email, password:hashPassword});


    res.json({message:"User Registered Successfully...!   :) ",user})
};


export const login = async (req,res) => {
    const {email,password} = req.body;

    let user = await User.findOne({email});

    if(!user) return res.json({message:"sorry.. this username does'nt exist "});

    const validPassword = bcrypt.compare(password,user.password);

    res.json({message:"Login successfull ... .",user});
}