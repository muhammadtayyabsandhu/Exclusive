import express from "express";
import User from "../models/userModel.js";  // 🔹 Add this

// ✅ Controllers
import {
  signup,
  login,
  logout,

  allUsers,
  updateUserRole,
  deleteUser,

} from "../controller/userController.js";

// ✅ Middlewares
import { isAuthenticated, isAdmin } from "../middlewares/isAuthenticated.js";

// ✅ Utils (for file uploads)


const router = express.Router();

// ---------- Routes ----------
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);





router.get("/all_users", isAuthenticated, isAdmin, allUsers);
router.put("/:id", isAuthenticated, isAdmin, updateUserRole);
router.delete("/delete/:id", isAuthenticated, isAdmin, deleteUser);

// Get total number of users
router.get("/count", async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    res.status(200).json({ totalUsers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});


export default router;
