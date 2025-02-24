import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./Routes/userrouter.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Validate Environment Variables
if (!process.env.MONGO_URI) {
  console.error("❌ Error: MONGO_URI is not defined in .env");
  process.exit(1);
}

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });

// Sample Route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running smoothly!");
});

// Use Routes
app.use("/api/users", userRouter);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
