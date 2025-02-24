import React from "react";
import celogofull from "../CE/img/celogofull.png";

const users = [
  { name: "Karthik M", email: "chimbmon@gmail.com", phone: "1234567890", address: "123 Main St, City", idProof: "Aadhaar", reports: "5" },
  { name: "Viswajith E", email: "jithu@gmail.com", phone: "9876543210", address: "456 Elm St, Town", idProof: "Driving License", reports: "2" },
  { name: "Milan", email: "milanmon@gmail.com", phone: "1234567890", address: "123 Main St, City", idProof: "Aadhaar", reports: "5" },
  { name: "Neeraj", email: "appumon@gmail.com", phone: "1234567890", address: "123 Main St, City", idProof: "PAN", reports: "3" },
];

const Sidebar = () => {
  return (
    <div className="bg-white w-80 min-h-screen p-6 shadow-lg flex flex-col justify-between">
      <div>
        <div className="flex justify-center items-center mb-8">
          <img src={celogofull} width="250" height="80" alt="Civic Eye Logo" />
        </div>
        <nav className="space-y-4">
          {["📊 Overview", "⚖️ Complaints", "👤 User Management", "📄 Reports"].map((item, index) => (
            <button
              key={index}
              className="hover:bg-[#00b9ff] p-4 flex font-medium text-xl w-full hover:text-white rounded-lg"
            >
              <span>{item.split(" ")[0]}</span> <span className="ml-2">{item.split(" ")[1]}</span>
            </button>
          ))}
        </nav>
      </div>
      <button className="text-xl font-medium p-4 bg-[#00b9ff] text-white rounded-md">👮 Admin Name</button>
    </div>
  );
};

export const AdminUserList = () => {
  return (
    <div className="flex w-full min-h-screen bg-[#e6f8ff]">
      <Sidebar />
      <div className="flex-1 p-12">
        <div className="bg-white rounded-lg shadow-xl p-6 overflow-hidden">
          <h2 className="text-3xl font-bold mb-6">User Management</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-left text-lg font-semibold">
                  {["Name", "Email", "Phone", "Address", "ID Proof", "Reports"].map((header, index) => (
                    <th key={index} className="p-4 border-b">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      {Object.values(user).map((value, i) => (
                        <td key={i} className="p-4 border-b text-lg">{value}</td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="p-4 text-center text-lg font-medium">No users found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
