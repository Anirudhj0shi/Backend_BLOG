import { User } from "../Models/User.js";
import bcrypt from 'bcryptjs'
import  jwt from 'jsonwebtoken';


export const register = async (req,res) => {
    const { name, email, password } = req.body;

    // console.log(req.body);
    let user = await User.findOne({email});

    if(user) return res.status(404).json({message: "User is already registered    :(   "});

    const hashPassword =await bcrypt.hash(password,10);

         user = await User.create({name, email, password:hashPassword});


    res.status(201).json({message:"User Registered Successfully...!   :) ",user})
};


export const login = async (req,res) => {
    const {email,password} = req.body;

    let user = await User.findOne({email});

    if(!user) return res.json({message:"sorry.. this username does'nt exist "});

    const validPassword = await bcrypt.compare(password,user.password);

    if(!validPassword) return res.status(404).json({message:"userName or password is not valid ...."});

    const token = jwt.sign({ userId:user.id },process.env.JWT , {expiresIn:"1d",});

    res.status(200).json({message:`welcome ${user.name}`,token})
    
    // res.json({message:"Login successful ... .",user});
} 

export const getAllUsers = async (req,res) =>{
    const user = await User.find();
    if(!user) return res.json({message:"user not found"});

    res.json({user});
}

export const verifyToken = async (req,res,next) =>{
    const token = req.header('Auth');

    if(!token) return res.json({message:"can't Authorize check if u are logged in ..  "});
    // req.data = "login ho gya bro...";
    
    const decoded = Jwt.verify(token, process.env.JWT);

    const id = decoded.userId

    let user = await User.findById(id);

    if(!user) return res.json({message:"user not exist"});

    req.user = user;

    console.log(decoded); 
    
    next();

}

export const getUserById = async(req,res) =>{
    const id = req.params.id

    let user = await User.findById(id)

    if(!user) return res.json({message:"user not exist . . . !"})

    res.json({user});


}