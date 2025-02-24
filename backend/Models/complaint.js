import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  proof: { type: String }, // URL to uploaded file
  status: { type: String, enum: ["Pending", "Resolved"], default: "Pending" },
  createdAt: { type: Date, default: Date.now },
  resolvedAt: { type: Date },
});

const Complaint = mongoose.model("Complaint", complaintSchema);

export default Complaint;