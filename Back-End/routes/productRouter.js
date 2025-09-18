import express from "express";
import upload from "../utils/multer.js";
import { createProduct, getProducts, deleteProduct } from "../controller/productController.js";

const router = express.Router(); // ✅ Router declare karna zaruri hai

// Routes
router.post("/create", upload.single("image"), createProduct);
router.get("/", getProducts);
router.delete("/:id", deleteProduct); // ✅ Delete route add kar diya

export default router;
