import jwt from "jsonwebtoken";

const generateToken = (res, user, message) => {
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "5d",
    }
  );

  return res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      maxAge: 5 * 24 * 60 * 60 * 1000,
    })
    .json({
      success: true,
      message,
      user,
    });
};

export default generateToken;
