import express from "express";
import { submitComplaint, getComplaints } from "../Controllers/complaintcontroller.js";
import authMiddleware from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/submit", authMiddleware, submitComplaint);
router.get("/", authMiddleware, getComplaints);

export default router;