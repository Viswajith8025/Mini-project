import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Models/User.js";

// ✅ User Signup
export const signup = async (req, res) => {
  const { fullName, mobileNumber, email, password, dob, state, address, idProof, idProofNumber } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      fullName,
      mobileNumber,
      email,
      password: hashedPassword,
      dob,
      state,
      address,
      idProof,
      idProofNumber,
    });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// ✅ User Login
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ User Logout
export const logout = (req, res) => {
  res.status(200).json({ message: "Logged out successfully" });
};