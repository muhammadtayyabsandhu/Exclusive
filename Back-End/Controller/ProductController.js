import Product from '../../Back-End/Model/productModel.js';

// ✅ Get products by category
export const getProductsByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const products = await Product.find({ category: category.toLowerCase() });
   
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// ✅ Get all products (for frontend filtering if needed)
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// ✅ Create a product (for admin panel / inserting test data)
export const createProduct = async (req, res) => {
  const { title, price, category, description, image, stock, rating } = req.body;

  try {
    const newProduct = new Product({
      title,
      price,
      category: category.toLowerCase(),
      description,
      image,
      stock,
      rating,
    });

    await newProduct.save();
    res.status(201).json({ message: 'Product Created', newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create product', error });
  }
};
