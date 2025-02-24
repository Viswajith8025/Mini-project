import express from "express";
import { signup, login, logout } from "../Controllers/authController.js"; // ✅ Correct path

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;