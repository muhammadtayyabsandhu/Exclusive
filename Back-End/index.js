// index.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connect from "./config/db.js";
import userRoutes from "./Router/UserRoute.js";
import productRoutes from "./Router/productRoute.js";

// Config
dotenv.config();

// Express app
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/users", userRoutes);
app.use("/api/products", productRoutes);

// Ye export vercel ke function handler ke liye hai
export default async function handler(req, res) {
  try {
    await connect(); // DB connect karo har request pe
    return app(req, res); // Express app ko request do
  } catch (err) {
    console.error("❌ MongoDB error:", err.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
