import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    const user = await User.findById(decode.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user;
    req.id = decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    req.role = decode.role;
    if (req.role !== "admin") {
      return res
        .status(403)
        .json({ success: false, message: "You are not an admin" });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
