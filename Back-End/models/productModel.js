import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    brand_name: { type: String },
    category: { type: String, required: true },
    new_price: { type: Number, required: true },
    old_price: { type: Number },
    description: { type: String },
    image: { type: String, required: true }, // Cloudinary image URL
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
