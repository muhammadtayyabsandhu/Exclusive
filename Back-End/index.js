// index.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connect from "./config/db.js"; // MongoDB connection
import userRoutes from "./routes/UserRoute.js"; 
import productRouter from "./routes/productRouter.js";
import orderRouter from "./routes/orderRoute.js"
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/users", userRoutes);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/order", orderRouter);
// Gemini AI setup
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Bouquet AI route
app.post("/api/bouquet-ai", async (req, res) => {
  try {
    const { message } = req.body;
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(message);
    const reply = result?.response?.text() || "Sorry, no reply.";
    res.status(200).json({ reply });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ reply: "❌ Something went wrong." });
  }
});

// PORT
const PORT = process.env.PORT || 5000;

// MongoDB connect aur server start
connect()
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
