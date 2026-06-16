import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../UserModels.js"

export const signUp = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, contact } = req.body;

    if (!name || !email || !password || !confirmPassword || !contact) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      contact,
    });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",   // ← proxy ke baad same-origin ban jaata hai, lax kaam karta hai
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      success: true,
      message: "Signup successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        contact: user.contact,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};