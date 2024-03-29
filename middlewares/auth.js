import { User } from "../Models/User.js";
import  jwt  from "jsonwebtoken";


export const Authenticate = async (req,res,next) =>{
    const token = req.header('Auth');
    try{
        if(!token) return res.json({message:"can't Authorize check if u are logged in ..  "});
    // req.data = "login ho gya bro...";
        
        const decoded = jwt.verify(token, process.env.JWT);

        const id = decoded.userId

        let user = await User.findById(id);

        if(!user) return res.json({message:"user not exist"});

        req.user = user;

        console.log(decoded); 
        
        next();

    }
    catch(err){
        if(err.name == "Token Expired") return res.json({message:"Token expired please login"})

        res.json({message:"Internal Server error"});
    }
    

}