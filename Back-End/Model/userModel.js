import mongoose from 'mongoose';
import bcrypt from 'bcrypt';  // bcrypt ka import model mein bhi chahiye

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,   // ✅ Required field add kiya
            trim: true        // ✅ Extra spaces hata deta hai
        },
        email: {
            type: String,
            required: true,   // ✅ Required field add kiya
            unique: true,     // ✅ Unique constraint to avoid duplicate emails
            trim: true
        },
        password: {
            type: String,
            required: true    // ✅ Required field already hai, ye sahi hai
        }
    },
    { timestamps: true }
);

// 🟢 Password Hashing Middleware
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// 🟢 Correctly Add `matchPassword` Method
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
