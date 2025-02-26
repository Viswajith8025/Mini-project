import React from "react";
import { Link } from "react-router-dom";
import celogofull from "../CE/img/celogofull.png";

const CEHome = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center">
          <img src={celogofull} alt="CivicEYE Logo" className="h-10" />
        </div>
        <ul className="hidden md:flex space-x-8">
          <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition duration-300">Home</li>
          <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition duration-300">My Complaints</li>
          <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition duration-300">About</li>
          <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition duration-300">Contact</li>
        </ul>
        <div className="flex space-x-4">
          <Link to="/celogin">
            <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition duration-300">
              Login
            </button>
          </Link>
          <Link to="/cesignup">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gray-900 text-white text-center py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://source.unsplash.com/1600x800/?city,community"
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Make Your Voice Heard!
          </h1>
          <p className="text-xl mb-8">
            Report Problems, Help Your City, and Earn Rewards!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/cesignup">
              <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 text-lg font-semibold">
                Get Started
              </button>
            </Link>
            <Link to="/about">
              <button className="px-8 py-3 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition duration-300 text-lg font-semibold">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:-translate-y-1 transition duration-300">
            <div className="text-blue-500 text-4xl mb-2">📝</div>
            <h3 className="text-lg font-semibold mb-2">Complaints Registered</h3>
            <p className="text-3xl font-bold text-blue-600">1,002</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:-translate-y-1 transition duration-300">
            <div className="text-blue-500 text-4xl mb-2">📊</div>
            <h3 className="text-lg font-semibold mb-2">Reports Filed</h3>
            <p className="text-3xl font-bold text-blue-600">992</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:-translate-y-1 transition duration-300">
            <div className="text-blue-500 text-4xl mb-2">🏆</div>
            <h3 className="text-lg font-semibold mb-2">Rewards Distributed</h3>
            <p className="text-3xl font-bold text-blue-600">886</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:-translate-y-1 transition duration-300">
            <div className="text-blue-500 text-4xl mb-2">💪</div>
            <h3 className="text-lg font-semibold mb-2">Problems Solved</h3>
            <p className="text-3xl font-bold text-blue-600">752</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: "📱",
                title: "Register a Complaint",
                description: "Submit issues in your community with photos and location details."
              },
              {
                icon: "✅",
                title: "Validation Process",
                description: "Our team verifies your complaint for accuracy and priority."
              },
              {
                icon: "🔧",
                title: "Authority Resolution",
                description: "Relevant authorities are notified and take action on validated issues."
              },
              {
                icon: "🎁",
                title: "Earn Rewards",
                description: "Get points and rewards for your valuable community contributions."
              }
            ].map((step, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose CivicEYE?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-xl">✓</span>
                  <p>Easy-to-use platform for reporting community issues</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl">✓</span>
                  <p>Real-time tracking of complaint status and updates</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl">✓</span>
                  <p>Direct communication with responsible authorities</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl">✓</span>
                  <p>Earn rewards for active community participation</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl">✓</span>
                  <p>Help create a better, safer environment for everyone</p>
                </li>
              </ul>
              <Link to="/cesignup">
                <button className="mt-8 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition duration-300 font-semibold">
                  Join Now
                </button>
              </Link>
            </div>
            <div className="bg-blue-700 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Common Issues Reported</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Road Conditions</h4>
                  <p className="text-blue-100 text-sm">Potholes, broken pavements, road damage</p>
                </div>
                <div className="bg-blue-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Sanitation</h4>
                  <p className="text-blue-100 text-sm">Garbage collection, public cleanliness</p>
                </div>
                <div className="bg-blue-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Street Lighting</h4>
                  <p className="text-blue-100 text-sm">Faulty lights, dark areas, electrical issues</p>
                </div>
                <div className="bg-blue-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Water Supply</h4>
                  <p className="text-blue-100 text-sm">Leakages, contamination, supply disruptions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "CivicEYE helped me get the broken street lights in my neighborhood fixed in just a week. Amazing service!",
                author: "Sarah Johnson",
                location: "Downtown"
              },
              {
                quote: "The reward system keeps me motivated to report issues. I've earned enough points for a free coffee every month!",
                author: "Mike Thomas",
                location: "Riverside"
              },
              {
                quote: "As a senior citizen, I appreciate how easy the platform is to use. Got my water leak fixed quickly.",
                author: "Eleanor Davis",
                location: "Hillside"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center">Share Your Experience</h3>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="text"
                placeholder="Write your feedback"
                className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 whitespace-nowrap">
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl text-blue-500 mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">For any assistance, please contact our support team.</p>
              <p className="text-blue-500 text-lg font-medium">support@civiceye.com</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl text-blue-500 mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">Need help? Give us a call anytime.</p>
              <p className="text-blue-500 text-lg font-medium">+123 456 7890</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Stay Updated</h2>
          <p className="mb-8">Subscribe to our newsletter for the latest updates and community news</p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-l-lg md:w-96 text-gray-800 focus:outline-none"
            />
            <button className="px-6 py-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src={celogofull} alt="CivicEYE Logo" className="h-10 mb-4" />
              <p className="text-gray-400">Making communities better through citizen engagement and problem reporting.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="mb-2"><span className="text-gray-400">Email:</span> support@civiceye.com</p>
              <p className="mb-2"><span className="text-gray-400">Phone:</span> +123 456 7890</p>
              <p><span className="text-gray-400">Address:</span> 123 Main Street, City</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Instagram
                </a>
              </div>
              <p className="text-gray-400">Download our mobile app</p>
              <div className="flex space-x-3 mt-2">
                <a href="#" className="bg-gray-800 px-3 py-2 rounded text-sm">App Store</a>
                <a href="#" className="bg-gray-800 px-3 py-2 rounded text-sm">Google Play</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© CivicEYE {new Date().getFullYear()} | Reporting Online. Ensuring Communities.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CEHome;