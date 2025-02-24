import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./Config/db.js";
import authRouter from "./Routes/auth.js";
import userRouter from "./Routes/user.js";
import complaintRouter from "./Routes/complaint.js";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(json());

// Database Connection
connectDb();

// Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/complaint", complaintRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});