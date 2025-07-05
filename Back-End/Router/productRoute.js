import express from 'express';
import {
  getProductsByCategory,
  getAllProducts,
  createProduct,
} from '../../Back-End/Controller/ProductController.js';

const router = express.Router();

// ✅ GET all products
router.get('/', getAllProducts);

// ✅ GET products by category (like flash sales, new arrival, etc.)
router.get('/:category', getProductsByCategory);

// ✅ POST a new product
router.post('/', createProduct);

export default router;
