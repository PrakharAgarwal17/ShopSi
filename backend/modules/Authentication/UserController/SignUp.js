import brcypt from "bcrypt"
import jwt from "jsonwebtoken"
import UserModels from "../UserModels.js";

export default async function SignUp(req, res) {
  try {
    const jwttoken = process.env.JWT
    const { name, email, password, confirmPassword, contact } = req.body;

    if (!name || !email || !password || !confirmPassword || !contact) {
      return res.status(400).json({ message: "All fields must be filled" });
    }
    const userexist = await UserModels.findOne({ email: email });
    if (userexist) {
      return res.status(500).json({message:"User already exist"});
    }
    if(password!==confirmPassword){
        return res.status(400).json({messgae:"Password doesnt match"})
    }

    const hashpass = await brcypt.hash(password , 10)
        if(!hashpass) {
    
      return res.status(404).json({message : "can not create account due to server issue"})
    }

    const createUser=await UserModels.create({name,email,password:hashpass,contact})
      
    if(!createUser) {
      return res.status(500).json({message: "user not created try again "})
    }
    
    const token= jwt.sign({id:createUser._id,email} , jwttoken)
    
    if(!token) {
      return res.status(400).json({message : "no token assign"})
    }

    res.cookie("token",token , {
      httpOnly:true,
      maxAge:1000*60*60*24*15
    })

    const user = {
      name: createUser.name,
      contact:createUser.contact
    }
    
   res.status(200).json({message:"Done signup", user})
    
  } catch (err) { 
    console.log(err);
    return res.status(500).json({message:"Something went wrong"})
  }
}
