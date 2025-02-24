import express from "express";
import { getUserProfile, updateUserProfile } from "../Controllers/userController.js";
import authMiddleware from "../middleware/authmiddleware.js";

const router = express.Router();

router.get("/profile", authMiddleware, getUserProfile);
router.put("/profile", authMiddleware, updateUserProfile);

export default router;