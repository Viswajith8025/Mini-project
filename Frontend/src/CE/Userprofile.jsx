import celogofull from '../CE/img/celogofull.png';
import { useState } from "react";

const formDataState = {
  fullName: "Karthik km",
  mobileNumber: "773778025",
  email: "karthik@gmail.com",
  dob: "2003-10-01",
  password: "password",
  state: "",
  address: "chimbuveetilmon cheekilode po",
  idProof: "",
  idProofNumber: "123456789",
};

const CEUserprofile = () => {
  const [formData, setFormData] = useState(formDataState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[80%] max-w-4xl">
        {/* Updated Header with Logo */}
        <h1 className="text-3xl font-bold text-center mb-6 flex items-center justify-center">
          {/* <span className="mr-2">📹</span>
          <span className="text-gray-800">Civic</span>
          <span className="text-blue-500">EYE</span> */}
          <img src={celogofull} alt="Civic Eye Logo" className="h-10 w-auto ml-3" />
        </h1>

        {/* Rest of the form remains unchanged */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col items-start text-left">
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col items-start text-left">
            <label className="block text-sm font-medium text-gray-700">State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 border rounded-md bg-white cursor-pointer"
            >
              <option value="">Select District</option>
              <option value="Kasargod">Kasargod</option>
              <option value="Kannur">Kannur</option>
              <option value="Wayanad">Wayanad</option>
              <option value="Kozhikode">Kozhikode</option>
              <option value="Malappuram">Malappuram</option>
              <option value="Palakkad">Palakkad</option>
              <option value="Thrissur">Thrissur</option>
              <option value="Ernakulam">Ernakulam</option>
              <option value="Idukki">Idukki</option>
              <option value="Kottayam">Kottayam</option>
              <option value="Alappuzha">Alappuzha</option>
              <option value="Pathanamthitta">Pathanamthitta</option>
              <option value="Kollam">Kollam</option>
              <option value="Thiruvananthapuram">Thiruvananthapuram</option>
            </select>
          </div>

          <div className="flex flex-col items-start text-left">
            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            />
          </div>

          <div className="flex flex-col items-start text-left">
            <label className="block text-sm font-medium text-gray-700">ID Proof</label>
            <select
              name="idProof"
              value={formData.idProof}
              onChange={handleChange}
              className="w-full p-2 border rounded-md bg-white cursor-pointer"
            >
              <option value="">Select ID Proof</option>
              <option value="Aadhaar">Aadhaar</option>
              <option value="Drivers licence">Driving Licence</option>
              <option value="PAN Card">PAN Card</option>
            </select>
          </div>

          <div className="flex flex-col items-start text-left">
            <label className="block text-sm font-medium text-gray-700">D.O.B</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            />
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-2xl hover:bg-blue-600 transition duration-200">
            EDIT
          </button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-2xl hover:bg-blue-600 transition duration-200">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CEUserprofile;
