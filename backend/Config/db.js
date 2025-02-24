import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const DB_URL = process.env.MONGO_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("✅ MongoDB Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

export default connectDb;