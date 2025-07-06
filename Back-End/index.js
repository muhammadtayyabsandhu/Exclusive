import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connect from "./config/db.js";
import userRoutes from "./Router/UserRoute.js";
import productRoutes from "./Router/productRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/users", userRoutes);
app.use("/api/products", productRoutes);
app.get("/", (req, res) => {
  res.send("✅ Backend API is Live!");
});

export default async function handler(req, res) {
  try {
    await connect(); // mongoDB connect karo jab request aaye
    return app(req, res); // Express ko request do
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
