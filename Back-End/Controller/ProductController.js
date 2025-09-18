import Product from "../models/productModel.js";
import { uploadMedia } from "../utils/cloudinary.js";
import striptags from "striptags";

// Create Product
export const createProduct = async (req, res) => {
  try {
    let { title, brand_name, tags, category, new_price, old_price, description } = req.body;

    const cleanDescription = description ? striptags(description) : "";
    if (!tags) tags = undefined;

    // multer-storage-cloudinary already uploads and gives Cloudinary URL
    const image = req.file ? req.file.path : "";

    const product = await Product.create({
      title,
      brand_name,
      tags,
      category,
      new_price,
      old_price,
      description: cleanDescription,
      image,
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error("Product create error:", error);
    res.status(500).json({
      success: false,
      message: `Error ${error.message} while creating product`,
    });
  }
};

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error("Get products error:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching products",
    });
  }
};

// Delete Product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Delete product error:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting product",
    });
  }
};
