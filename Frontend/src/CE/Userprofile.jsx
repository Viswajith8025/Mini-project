import React, { useState, useEffect } from "react";
import celogofull from '../CE/img/celogofull.png';
import axios from "axios"; // Import Axios for API calls

const CEUserprofile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    dob: "",
    password: "",
    state: "",
    address: "",
    idProof: "",
    idProofNumber: "",
  });
  const [error, setError] = useState(""); // State for error messages
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode

  // Fetch user profile data on component mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")); // Get user data from localStorage
    if (user) {
      setFormData(user); // Pre-fill the form with user data
    } else {
      // If no user data in localStorage, fetch from the backend
      const fetchProfile = async () => {
        try {
          const token = localStorage.getItem("token");
          const response = await axios.get("http://localhost:5000/api/user/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setFormData(response.data); // Set the fetched data to state
        } catch (error) {
          setError("Failed to fetch profile data");
        }
      };
      fetchProfile();
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setIsEditing(true); // Enable edit mode
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put("http://localhost:5000/api/user/profile", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert(response.data.message); // Show success message
      setIsEditing(false); // Disable edit mode
    } catch (error) {
      setError("Failed to update profile");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[80%] max-w-4xl">
        {/* Updated Header with Logo */}
        <h1 className="text-3xl font-bold text-center mb-6 flex items-center justify-center">
          <img src={celogofull} alt="Civic Eye Logo" className="h-10 w-auto ml-3" />
        </h1>

        {/* Display error message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Profile Form */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col items-start text-left">
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            />
          </div>

          <div className="flex flex-col items-start text-left">
            <label className="block text-sm font-medium text-gray-700">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              className="w-full p-2 border rounded-md bg-gray-100"
              readOnly
            />
          </div>

          <div className="flex flex-col items-start text-left">
            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            />
          </div>

          <div className="flex flex-col items-start text-left">
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            />
          </div>

          <div className="flex flex-col items-start text-left">
            <label className="block text-sm font-medium text-gray-700">Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            />
          </div>

          <div className="flex flex-col items-start text-left">
            <label className="block text-sm font-medium text-gray-700">ID Proof</label>
            <select
              name="idProof"
              value={formData.idProof}
              onChange={handleChange}
              className="w-full p-2 border rounded-md bg-white cursor-pointer"
              disabled={!isEditing}
            >
              <option value="">Select ID Proof</option>
              <option value="Aadhaar">Aadhaar</option>
              <option value="Driving Licence">Driving Licence</option>
              <option value="PAN Card">PAN Card</option>
            </select>
          </div>

          <div className="flex flex-col items-start text-left">
            <label className="block text-sm font-medium text-gray-700">D.O.B</label>
            <input
              type="text"
              name="dob"
              value={formData.dob}
              className="w-full p-2 border rounded-md bg-gray-100"
              readOnly
            />
          </div>

          <div className="flex flex-col items-start text-left">
            <label className="block text-sm font-medium text-gray-700">ID Proof Number</label>
            <input
              type="text"
              name="idProofNumber"
              value={formData.idProofNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            />
          </div>

          <div className="flex flex-col items-start text-left">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          {isEditing ? (
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-6 py-2 rounded-2xl hover:bg-blue-600 transition duration-200"
            >
              SAVE
            </button>
          ) : (
            <button
              onClick={handleEdit}
              className="bg-blue-500 text-white px-6 py-2 rounded-2xl hover:bg-blue-600 transition duration-200"
            >
              EDIT
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CEUserprofile;