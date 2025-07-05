import User from '../Model/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const signUp = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: "An account with this email already exists." });
        }

        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Please write the correct email format" });
        }

        console.log("Before Hashing:", password);  // Password check before hashing
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("After Hashing:", hashedPassword);  // Password check after hashing
    
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });
        
    console.log("New User Data:", newUser); // Ye dekhne k liye kya data ja rha hai
    
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ message: "Email and Password are required" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Email not found" });
        }

        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect password" });
        }

        const { _id } = user;
        const token = jwt.sign({ id: _id }, process.env.SECRET_KEY, { expiresIn: "1h" });

        return res.status(200).json({
            success: true,
            message: "User login successful",
            user,
            token
        });

    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({ message: "Server Error" });
    }
};
