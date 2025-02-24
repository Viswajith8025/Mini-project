import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dob: { type: Date, required: true },
  state: { type: String, required: true },
  address: { type: String, required: true },
  idProof: { type: String, required: true },
  idProofNumber: { type: String, required: true },
  rewards: { type: Number, default: 0 },
  complaints: [{ type: mongoose.Schema.Types.ObjectId, ref: "Complaint" }],
});

const User = mongoose.model("User", userSchema);

export default User;