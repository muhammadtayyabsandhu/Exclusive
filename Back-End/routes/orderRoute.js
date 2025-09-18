import express from "express";
import { isAuthenticated, isAdmin } from "../middlewares/isAuthenticated.js";
import {
  placeOrder,
  userOrder,
  allOrders,
  updateOrderStatus,
} from "../controller/orderController.js";

const router = express.Router();

router.route("/place_order").post(isAuthenticated, placeOrder);
router.route("/").get(isAuthenticated, userOrder);
router.route("/all_orders").get(isAdmin, isAuthenticated, allOrders);
router.route("/update_status/:id").put(isAdmin, isAuthenticated, updateOrderStatus);

export default router;
