import Complaint from "../Models/complaint.js";

// ✅ Submit Complaint
export const submitComplaint = async (req, res) => {
  const { description, type, location, proof } = req.body;

  // Validate required fields
  if (!description || !type || !location) {
    return res.status(400).json({ error: "Description, type, and location are required fields." });
  }

  try {
    // Create a new complaint
    const complaint = new Complaint({
      userId: req.userId, // Attach the user ID from the authenticated request
      description,
      type,
      location,
      proof: proof || null, // Optional field
      status: "Pending", // Default status
    });

    // Save the complaint to the database
    await complaint.save();

    // Send success response
    res.status(201).json({ message: "Complaint submitted successfully", complaint });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get User Complaints
export const getComplaints = async (req, res) => {
  try {
    // Fetch complaints for the logged-in user
    const complaints = await Complaint.find({ userId: req.userId }).select(
      "_id type description status createdAt"
    );

    // If no complaints are found, return a message
    if (complaints.length === 0) {
      return res.status(200).json({ message: "No complaints found.", complaints: [] });
    }

    // Send the complaints as a response
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};