import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReportIssueForm = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission
  const navigate = useNavigate(); // Hook for navigation

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleCancel = () => {
    navigate("/cehome2"); // Redirect to home page
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate form submission (replace with actual API call)
    setIsSubmitted(true);
    setTimeout(() => {
      navigate("/cehome2"); // Redirect to home page after 2 seconds
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-center mb-2">
          Report Issues Seamlessly
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Our platform empowers users to submit complaints with ease, offering
          tools to upload multimedia for comprehensive issue reporting.
        </p>

        {/* Success Message */}
        {isSubmitted && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Complaint submitted successfully! Redirecting to home page...
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-medium text-gray-700">Description</label>
            <input
              type="text"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Complaint type</label>
            <select
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="">Select type</option>
              <optgroup label="Vehicle">
                <option>Riding without helmets</option>
                <option>Reckless driving</option>
                <option>Signal line crossing</option>
                <option>Triples</option>
                <option>Mirror</option>
                <option>Using mobile while driving</option>
                <option>Not giving pass to emergency vehicles (others)</option>
                <option>Wrong way</option>
                <option>Underage driving</option>
                <option>Driving without seatbelt</option>
                <option>Overloading</option>
                <option>No parking</option>
                <option>Driving on footpath</option>
                <option>Towing</option>
                <option>Carrying goods unsafe</option>
              </optgroup>
              <optgroup label="Others">
                <option>Waste dumping</option>
                <option>Public nuisance</option>
                <option>Theft</option>
                <option>Shoplifting</option>
                <option>Smoking in public</option>
                <option>Overcharging fare</option>
              </optgroup>
            </select>
          </div>
          <div>
            <label className="block font-medium text-gray-700">Location</label>
            <input
              type="text"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Proof</label>
            <button
              type="button"
              onClick={triggerFileSelect}
              className="w-full mt-1 px-3 py-2 bg-blue-300 text-black font-medium rounded-lg hover:bg-blue-400 transition"
            >
              {fileName ? `Uploaded: ${fileName}` : "Upload photo or video"}
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="hidden"
              accept="image/*,video/*"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="w-1/2 px-3 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition mr-2"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="w-1/2 px-3 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportIssueForm;