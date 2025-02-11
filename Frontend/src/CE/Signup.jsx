import React, { useState } from "react";
import celogofull from '../CE/img/celogofull.png';
import { Link } from "react-router-dom";

export const Signup = () => {
  const [signindata, setsignindata] = useState('');

  const change = (event) => {
    setsignindata({ ...signindata, [event.target.name]: event.target.value });
  };

  const submit = async (event) => {
    event.preventDefault();
    try {
      console.table(signindata);
    } catch (error) {
      console.log("CL", error);
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

          <form className="w-full max-w-sm" onSubmit={submit}>
            {/* Full Name */}
            <div className="mb-3">
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#00B9FF] placeholder-gray-500"
                onChange={change}
              />
            </div>

            {/* Mobile Number */}
            <div className="mb-3">
              <input
                id="mobile"
                name="mobile"
                type="tel"
                placeholder="Mobile Number"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#00B9FF] placeholder-gray-500"
                onChange={change}
              />
            </div>

            {/* Date of Birth */}
            <div className="mb-3">
              <input
                id="dob"
                name="dob"
                type="date"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#00B9FF] placeholder-gray-500"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.value === "" ? (e.target.type = "text") : null)}
                onChange={change}
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
