import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connect from "./config/db.js";
import userRoutes from "./Router/UserRoute.js";
import productRoutes from "./Router/productRoute.js";

dotenv.config();
connect();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/api/products", productRoutes);

export default app;
