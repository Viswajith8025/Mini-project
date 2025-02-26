import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown"; // Import the updated ProfileDropdown

const Home2 = () => {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-gray-100 min-h-screen dark:bg-gray-900">
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition duration-300">
          <span className="text-black dark:text-white">Civic</span>
          <span className="text-blue-500">EYE</span>
        </h1>
        <ul className="flex space-x-8">
          <li
            className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-300"
            onClick={() => handleNavigation("/cehome")}
          >
            Home
          </li>
          <li
            className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-300"
            onClick={() => handleNavigation("/cemycomplaints")}
          >
            My Complaints
          </li>
          <li
            className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-300"
            onClick={() => handleNavigation("/about")}
          >
            About
          </li>
          <li
            className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-300"
            onClick={() => handleNavigation("/contact")}
          >
            Contact
          </li>
          <li
            className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-300"
            onClick={() => handleNavigation("/cereportissue")}
          >
            Register Complaint
          </li>
        </ul>

        <ProfileDropdown />
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gray-900 text-white text-center py-32">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover opacity-30"
  >
    {/* Replace with a traffic/vehicle/road safety video */}
    <source src="https://your-video-source/traffic-video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="relative z-10">
    <h2 className="text-4xl font-bold mb-6">Make Your Community Better</h2>
    <p className="text-lg mb-8">
      Report issues, track progress, and contribute to a cleaner, safer environment.
    </p>
    <button
      onClick={() => handleNavigation("/cereportissue")}
      className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
    >
      Report an Issue Now
    </button>
  </div>
</header>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose CivicEye?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Real-Time Tracking",
                description: "Track the status of your complaints in real-time.",
              },
              {
                icon: "📱",
                title: "Easy Reporting",
                description: "Report issues in just a few clicks with our user-friendly platform.",
              },
              {
                icon: "🌍",
                title: "Community Engagement",
                description: "Join hands with your community to resolve issues faster.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center"
              >
                <span className="text-4xl mb-4">{feature.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Report", description: "Submit your complaint with details." },
              { step: "2", title: "Track", description: "Monitor the progress of your complaint." },
              { step: "3", title: "Resolve", description: "Get notified when the issue is resolved." },
              { step: "4", title: "Engage", description: "Join the community to make a difference." },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              >
                <span className="text-4xl font-bold text-blue-500">{step.step}</span>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                testimonial: "CivicEye made it so easy to report issues in my neighborhood!",
              },
              {
                name: "Jane Smith",
                testimonial: "I love how transparent the process is. Highly recommend!",
              },
              {
                name: "Alice Johnson",
                testimonial: "The community engagement feature is fantastic. Great job!",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center"
              >
                <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                  "{testimonial.testimonial}"
                </p>
                <p className="font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Phone Numbers</h3>
            <p>+123 456 7890</p>
            <p>+987 654 3210</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p>support@civiceye.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <p onClick={() => handleNavigation("/home")}>Home</p>
            <p onClick={() => handleNavigation("/cemycomplaints")}>My Complaints</p>
            <p onClick={() => handleNavigation("/about")}>About</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-400">
                Facebook
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-400">
                Twitter
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-400">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-gray-400">
          © CivicEye 2025 | Reporting Online. Ensuring Communities.
        </p>
      </footer>
    </div>
  );
};

export default Home2;