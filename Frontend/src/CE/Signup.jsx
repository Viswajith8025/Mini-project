import React, { useState } from "react";
import celogofull from '../CE/img/celogofull.png';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios for API calls

export const Signup = () => {
  const [signupdata, setsignupdata] = useState({
    fullName: "",
    mobileNumber: "",
    dob: "",
    email: "",
    password: "",
    state: "",
    address: "",
    idProof: "",
    idProofNumber: "",
  });
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate(); // For navigation after signup

  const change = (event) => {
    setsignupdata({ ...signupdata, [event.target.name]: event.target.value });
  };

  const submit = async (event) => {
    event.preventDefault();
    try {
      // Call the backend signup API
      const response = await axios.post("http://localhost:5000/api/auth/signup", signupdata);
      alert(response.data.message); // Show success message
      navigate("/celogin"); // Redirect to the login page
    } catch (error) {
      // Handle errors from the backend
      if (error.response) {
        setError(error.response.data.error); // Set error message from backend
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-6">
      {/* Outer Box */}
      <div className="bg-white flex flex-col md:flex-row w-full md:w-[900px] shadow-lg rounded-2xl p-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center border-b-2 md:border-b-0 md:border-r-2 border-gray-300 p-8">
          <img src={celogofull} alt="Civic Eye Logo" className="w-40 mb-4" />
          <p className="text-gray-800 text-lg font-medium text-center">
            Welcome to <span className="font-semibold">CivicEye!</span>
          </p>
          <p className="text-gray-500 text-center mt-2">
            Your platform to report, track, <br />
            and resolve public issues with ease.
          </p>
        </div>

        {/* Right Section (Signup Form) */}
        <div className="w-full md:w-1/2 flex flex-col items-center p-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            SIGN <span className="text-[#00B9FF]">UP</span>
          </h2>

          {/* Display error message */}
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form className="w-full max-w-sm" onSubmit={submit}>
            {/* Full Name */}
            <div className="mb-3">
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#00B9FF] placeholder-gray-500"
                onChange={change}
                required
              />
            </div>

            {/* Mobile Number */}
            <div className="mb-3">
              <input
                id="mobileNumber"
                name="mobileNumber"
                type="tel"
                placeholder="Mobile Number"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#00B9FF] placeholder-gray-500"
                onChange={change}
                required
              />
            </div>

            {/* Date of Birth */}
            <div className="mb-3">
              <input
                id="dob"
                name="dob"
                type="date"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#00B9FF] placeholder-gray-500"
                onChange={change}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#00B9FF] placeholder-gray-500"
                onChange={change}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#00B9FF] placeholder-gray-500"
                onChange={change}
                required
              />
            </div>

            {/* State Dropdown */}
            <div className="mb-3">
              <select
                id="state"
                name="state"
                value={signupdata.state}
                onChange={change}
                className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#00B9FF]"
                required
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

            {/* Address */}
            <div className="mb-3">
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Address"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#00B9FF] placeholder-gray-500"
                onChange={change}
                required
              />
            </div>

            {/* ID Proof */}
            <div className="mb-3">
              <select
                id="idProof"
                name="idProof"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#00B9FF] placeholder-gray-500"
                onChange={change}
                required
              >
                <option value="">Select ID Proof</option>
                <option value="Aadhaar">Aadhaar</option>
                <option value="Driving Licence">Driving Licence</option>
                <option value="PAN Card">PAN Card</option>
              </select>
            </div>

            {/* ID Proof Number */}
            <div className="mb-4">
              <input
                id="idProofNumber"
                name="idProofNumber"
                type="text"
                placeholder="ID Proof Number"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#00B9FF] placeholder-gray-500"
                onChange={change}
                required
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-[#00B9FF] text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition"
            >
              SIGN UP
            </button>
          </form>

          {/* Sign In Link */}
          <p className="text-gray-600 text-sm mt-4">
            Already have an account?{' '}
            <Link to="/celogin" className="text-[#00B9FF] font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;