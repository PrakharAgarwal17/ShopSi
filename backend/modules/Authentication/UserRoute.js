import express from "express";

import SignIn from "./UserController/SignIn.js";
import SignOut from "./UserController/SignOut.js";
import { signUp } from "./UserController/SignUp.js";
const router = express.Router();

router.post("/api/signup" , signUp);
router.post("/api/login" , SignIn)
router.post("/api/logout" , SignOut)

export default router;
