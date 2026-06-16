import UserModels from "../UserModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function login(req, res) {
  try {
    const jwtSecret = process.env.JWT;

    if (!jwtSecret) {
      return res.status(500).json({
        message: "JWT secret is not configured",
      });
    }

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const userexist = await UserModels.findOne({ email });

    if (!userexist) {
      return res.status(404).json({
        message: "User does not exist. Please sign up first.",
      });
    }

    const checkpass = await bcrypt.compare(
      password,
      userexist.password
    );

    if (!checkpass) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        id: userexist._id,
        email: userexist.email,
      },
      jwtSecret,
      {
        expiresIn: "7d",
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const user = {
      id: userexist._id,
      name: userexist.name,
      email: userexist.email,
      contact: userexist.contact,
    };

    return res.status(200).json({
      message: "User logged in successfully",
      user,
    });
  } catch (err) {
    console.error("Login Error:", err);

    return res.status(500).json({
      message: "Something went wrong",
    });
  }
}