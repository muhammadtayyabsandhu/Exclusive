import Order from "../models/orderModel.js";

// Create Order
export const placeOrder = async (req, res) => {
  try {
    const userId = req.id;
    const { address, city, state, zip, mobile, products, totalAmount } =
      req.body;

    // Create order without Stripe
    const order = new Order({
      userId,
      address,
      city,
      state,
      zip,
      mobile,
      products,
      totalAmount,
      Date: new Date(),
      status: "pending",
    });

    await order.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error ${error} while creating order`,
    });
  }
};

// Get user orders
export const userOrder = async (req, res) => {
  try {
    const userId = req.id;
    const orders = await Order.find({ userId });
    res.status(201).json({
      success: true,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error ${error} while getting order`,
    });
  }
};

// Get all orders
export const allOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    if (orders) {
      res.status(201).json({
        success: true,
        orders,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error ${error} while getting orders`,
    });
  }
};

// Update order status
export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["pending", "shipped", "delivered"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({
      success: true,
      message: "Order updated successfully",
      order,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Error : ${error} while updating order status`,
    });
  }
};
