"use client"
import React from 'react'

const Header = () => {
  return (
    <header className="w-full h-20 bg-gradient-to-r from-green-600 to-teal-500 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="text-white font-bold text-2xl cursor-pointer transition transform hover:scale-105">
          <h4>Logo</h4>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex items-center gap-10">
          <a href="#about" className="text-white text-lg font-medium hover:text-gray-200 transition-colors duration-300 ease-in-out hover:underline">
            About
          </a>
          <a href="#gallery" className="text-white text-lg font-medium hover:text-gray-200 transition-colors duration-300 ease-in-out hover:underline">
            Gallery
          </a>
          <a href="#blog" className="text-white text-lg font-medium hover:text-gray-200 transition-colors duration-300 ease-in-out hover:underline">
            Blog
          </a>
          <a href="#contact" className="text-white text-lg font-medium hover:text-gray-200 transition-colors duration-300 ease-in-out hover:underline">
            Contact
          </a>
        </nav>
        
        {/* Call to Action Button */}
        <div>
          <button className="px-6 py-2 bg-white text-green-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1 hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

