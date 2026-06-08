
export default async function SignOut(req,res){
    try {
       const logout =  res.cookie('token', '', {
        httpOnly: true,      
        sameSite: 'strict', 
        expires: new Date(0), 
        maxAge: 0    
       })
       
       if(!logout) {
        return res.status(500).json({message : "not logout"})
       }
       return res.status(200).json({message:"logout done"})

    }catch(err) {
          console.log(err)
    }
}