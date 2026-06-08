import UserModels from "../UserModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export default async function (req, res) {
  try {
    const jwttoken = process.env.JWT
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields must be inputted" });
    }
    const userexist = await UserModels.findOne({ email: email });
    if (!userexist) {
      return res.status(500).json({message:"User not exist signup first "});
    }
    const userpass = userexist.password

    if(!userpass) {
      return res.status(400).json({message : "user not exist"})
    }
    const checkpass =await bcrypt.compare(password,userpass)
    
    const token=jwt.sign({id:userexist._id,email}, jwttoken)

    res.cookie("token", token,{
        httpOnly:true,
        maxAge:1000*60*60*24*15
    })
     const user = {
      name: userexist.name,
      contact: userexist.contact
    }
    return res.status(200).json({message:"user successfully login" , user })
    
    
  } catch (err) {
    console.log(err)
    return res.status(500).json({message:"Something went wrong"})
  }
}
