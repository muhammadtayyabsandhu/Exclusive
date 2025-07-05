import express from 'express';
import dotenv from 'dotenv';

import userRoutes from '../Back-End/Router/UserRoute.js';
import productRoutes from "../Back-End/Router/productRoute.js"
import connect from './config/db.js';
import cors from "cors";
dotenv.config();
connect()


const app = express();
const PORT = process.env.PORT || 3000;

// CORS

app.use(cors());



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Main Route
app.use('/users', userRoutes);
app.use('/api/products', productRoutes);


// Server Start
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});
