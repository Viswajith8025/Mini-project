import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";

const Home3 = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [recentReports, setRecentReports] = useState([
    // { id: 1, title: "Pothole on Main Street", status: "In Progress", date: "Feb 20, 2025" },
    // { id: 2, title: "Broken Street Light", status: "Resolved", date: "Feb 18, 2025" },
    // { id: 3, title: "Illegal Dumping", status: "Pending", date: "Feb 15, 2025" }
  ]);

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  // Handle dark mode toggle
  useEffect(() => {
    // Check user's preference from localStorage
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
    
    // Simulate loading state
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    document.documentElement.classList.toggle("dark", newMode);
  };

  // If loading, show skeleton
  if (loading) {
    return (
      <div className="bg-gray-100 min-h-screen dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-pulse text-2xl font-bold text-blue-600">
          <span className="text-black dark:text-white">Loading Civic</span>
          <span className="text-blue-500">EYE</span>
          <span className="ml-2">...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen dark:bg-gray-900">
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow-md py-4 px-4 md:px-8 flex flex-wrap justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition duration-300">
          <span className="text-black dark:text-white">Civic</span>
          <span className="text-blue-500">EYE</span>
        </h1>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-gray-700 dark:text-gray-300 p-2" id="mobile-menu-button">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        
        <ul className="hidden md:flex space-x-4 lg:space-x-8">
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

        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            )}
          </button>
          <ProfileDropdown />
        </div>
        
        {/* Mobile Navigation Menu (Hidden by default) */}
        <div className="hidden w-full md:hidden mt-4" id="mobile-menu">
          <ul className="flex flex-col space-y-3 pb-3">
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
            <li className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
              <button 
                onClick={toggleDarkMode} 
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {darkMode ? "🌞" : "🌙"}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gray-900 text-white text-center py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Make Your Community Better</h2>
          <p className="text-base md:text-lg mb-6 md:mb-8">
            Report issues, track progress, and contribute to a cleaner, safer environment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleNavigation("/cereportissue")}
              className="bg-blue-500 text-white px-6 md:px-8 py-3 rounded-lg hover:bg-blue-600 transition duration-300 w-full sm:w-auto"
            >
              Report an Issue Now
            </button>
            <button
              onClick={() => handleNavigation("/about")}
              className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-2.5 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300 w-full sm:w-auto"
            >
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Recent Reports Section */}
      <section className="py-12 bg-blue-50 dark:bg-gray-850">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Recent Community Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentReports.map((report) => (
              <div key={report.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="p-4 border-l-4 border-blue-500">
                  <h3 className="font-semibold text-lg mb-2">{report.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{report.date}</span>
                    <span className={`text-sm px-2 py-1 rounded ${
                      report.status === "Resolved" 
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
                        : report.status === "In Progress" 
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" 
                        : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                    }`}>
                      {report.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => handleNavigation("/cemycomplaints")}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
            >
              View All Reports →
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Why Choose CivicEye?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: "🚀",
                title: "Real-Time Tracking",
                description: "Track the status of your complaints in real-time with instant notifications.",
              },
              {
                icon: "📱",
                title: "Easy Reporting",
                description: "Report issues in just a few clicks with our user-friendly platform.",
              },
              {
                icon: "🌍",
                title: "Community Engagement",
                description: "Join hands with your community to resolve issues faster and more effectively.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <span className="text-4xl mb-4 inline-block">{feature.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: "1", title: "Report", description: "Submit your complaint with details and photos." },
              { step: "2", title: "Track", description: "Monitor the progress of your complaint in real-time." },
              { step: "3", title: "Resolve", description: "Get notified when the issue is resolved." },
              { step: "4", title: "Feedback", description: "Rate the resolution and share your experience." },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center relative"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <p>Issues Reported</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <p>Resolution Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">12,000+</div>
              <p>Community Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "John Doe",
                role: "Resident",
                image: "/api/placeholder/60/60",
                testimonial: "CivicEye made it so easy to report issues in my neighborhood! I've seen real improvements.",
              },
              {
                name: "Jane Smith",
                role: "Community Leader",
                image: "/api/placeholder/60/60",
                testimonial: "I love how transparent the process is. It's brought our community closer together.",
              },
              {
                name: "Alice Johnson",
                role: "Local Business Owner",
                image: "/api/placeholder/60/60",
                testimonial: "The community engagement feature is fantastic. I'm seeing faster resolutions since we started using it.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Improve Your Community?</h2>
          <p className="mb-8 text-blue-100">Join thousands of citizens making a difference every day.</p>
          <button
            onClick={() => handleNavigation("/cereportissue")}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-100 transition duration-300 font-medium text-lg"
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h1 className="text-2xl font-bold mb-4">
                <span className="text-white">Civic</span>
                <span className="text-blue-500">EYE</span>
              </h1>
              <p className="text-gray-400 mb-4">Empowering communities through citizen engagement and transparent governance.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12.07c0-5.52-4.48-10-10-10s-10 4.48-10 10c0 5 3.66 9.14 8.44 9.89v-7h-2.54v-2.89h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v7C18.34 21.21 22 17.07 22 12.07z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  +123 456 7890
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  support@civiceye.com
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  123 Main Street, Anytown, USA
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavigation("/cehome")}>Home</li>
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavigation("/cemycomplaints")}>My Complaints</li>
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavigation("/about")}>About Us</li>
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavigation("/contact")}>Contact</li>
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavigation("/cereportissue")}>Report Issue</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Stay updated with our latest news and updates.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-center text-sm text-gray-400">
            © CivicEye 2025 | Reporting Online. Ensuring Communities.
          </p>
        </div>
      </footer>

      {/* JavaScript for Mobile Menu Toggle */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            mobileMenuButton.addEventListener('click', function() {
              mobileMenu.classList.toggle('hidden');
            });
          });
        `
      }} />
    </div>
  );
};

export default Home3;