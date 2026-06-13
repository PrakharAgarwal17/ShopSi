import express from "express"
import dotenv from "dotenv"
import { mongoconnect } from "./config/Mongoconnect.js"
import helmet from "helmet"
import userroute from "./modules/Authentication/UserRoute.js"
import cookieParser from "cookie-parser"

dotenv.config()

const app=express()
mongoconnect()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(helmet())


app.get("/" , (req , res) => {
  return res.status(200).send("Server running on 3000")
})
app.use("/user" , userroute)

app.listen(3000, () => {
    console.log("Working server")
})