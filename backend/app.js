import express from "express"
import dotenv from "dotenv"
import { mongoconnect } from "./config/Mongoconnect.js"
import userroute from "./modules/Authentication/UserRoute.js"
import cookieParser from "cookie-parser"
import cors from "cors"

dotenv.config()

const app = express()
mongoconnect()

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get("/", (req, res) => {
  return res.status(200).send("Server running on 3000")
})

app.use("/user", userroute)

app.listen(3000, () => {
  console.log("Working server")
})