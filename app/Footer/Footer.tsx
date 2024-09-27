"use client"
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div className="flex flex-col">
          <h4 className="text-2xl font-bold mb-4">About Us</h4>
          <p className="text-gray-200">
            We are committed to providing the best services and delivering an exceptional user experience through innovation and creativity.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col">
          <h4 className="text-2xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">About</a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Gallery</a>
            </li>
            <li>
              <a href="#blog" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Blog</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col">
          <h4 className="text-2xl font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300 ease-in-out">
              <i className="fab fa-facebook-f"></i> {/* FontAwesome Icon */}
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300 ease-in-out">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300 ease-in-out">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300 ease-in-out">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-400 mt-8 pt-4">
        <p className="text-center text-gray-300">&copy; 2024 Humaiza Naz. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
