import express from "express";
import SignUp from "./UserController/signup.js";
import SignIn from "./UserController/SignIn.js";
import SignOut from "./UserController/SignOut.js";
const router = express.Router();

router.post("/api/signup" , SignUp);
router.post("/api/login" , SignIn)
router.post("/api/logout" , SignOut)

export default router;
