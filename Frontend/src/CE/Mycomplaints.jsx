import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyComplaints = () => {
  const [complaints, setComplaints] = useState([]); // State to store complaints
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(""); // State to handle errors
  const navigate = useNavigate();

  // Fetch complaints when the component mounts
  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }
  
        const response = await axios.get("http://localhost:5000/api/complaint", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        setComplaints(response.data); // Set the fetched complaints
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch complaints. Please try again.");
        setLoading(false);
      }
    };
  
    fetchComplaints();
  }, [navigate]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-8">{error}</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">My Complaints</h1>
      {complaints.length === 0 ? (
        <p className="text-gray-700">You have not submitted any complaints yet.</p>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Complaint ID</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Date Submitted</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint) => (
                <tr key={complaint._id} className="border-b">
                  <td className="px-4 py-2 text-center">{complaint._id}</td>
                  <td className="px-4 py-2 text-center">{complaint.category}</td>
                  <td className="px-4 py-2 text-center">{complaint.description}</td>
                  <td className="px-4 py-2 text-center">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        complaint.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : complaint.status === "Resolved"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {complaint.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-center">
                    {new Date(complaint.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyComplaints;