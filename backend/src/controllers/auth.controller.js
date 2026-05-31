import User from "../models/Users.js"
import jwt from "jsonwebtoken"

export async function signup(req, res) {
    const {email, password, fullName} = req.body;
    try{
        if(!email || !password || !fullName){
            return res.status(400).json({message: "All fields are required"})
        }
        if(password.length < 6){
            return res.status(400).json({message: "Password must be at least 6 characters"})
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
        }

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "Email already in use"})
        }

        const idx = Math.floor(Math.random() * 10000);
        const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`

        const newUser = await User.create({
            fullName,
            email,
            password,
            profilePic: randomAvatar,
        })

        // TODO: Create a user in Stream as well
        const token = jwt.sign({userId : newUser._id}, process.env.JWT_SECRET, {expiresIn: "7d"
        })

        res.cookie("jwt", token,{
            max : 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
         })

         res.status(201).json({
            message: "User created successfully",
            success: true,
            user: newUser
         })
        
    }

    catch(error){
        console.error("Signup Error:", error);
        res.status(500).json({message: "Server Error"})
    }
}

export function login(req, res) {
    res.send("Login Route")
}

export function logout(req, res) {
    res.send("Logout Route")
}