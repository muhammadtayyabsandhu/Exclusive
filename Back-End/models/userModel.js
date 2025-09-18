import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {            // 👈 ab yaha "name" rakha hai
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user", // "admin" ya "user"
    },
    photoUrl: {
      type: String,
      default: "",
    },
    otp: {
      otp: { type: String },
      sendTime: { type: Number },
      resetPasswordToken: { type: String },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
