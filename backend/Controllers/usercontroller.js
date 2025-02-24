import User from "../Models/User.js";

// ✅ Get User Profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update User Profile
export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.userId, req.body, { new: true }).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};