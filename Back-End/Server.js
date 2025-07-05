// server.js
import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './Router/UserRoute.js';
import productRoutes from "./Router/productRoute.js";
import connect from './config/db.js';
import cors from "cors";

dotenv.config();
connect();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/users', userRoutes);
app.use('/api/products', productRoutes);

// ✅ Export the app only
export default app;
