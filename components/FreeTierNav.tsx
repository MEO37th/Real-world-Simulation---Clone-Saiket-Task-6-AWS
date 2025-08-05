"use client";

import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

const freeTierCategories = [
  "Artificial Intelligence",
  "Machine Learning", 
  "Database",
  "Web Apps",
  "DevOps",
  "Storage",
  "Analytics",
  "Networking",
  "Security",
  "Compute"
];

export function FreeTierNav() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="bg-rose-100 border-b border-rose-200">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <button className="text-gray-700 hover:text-orange-500 px-3 py-2 font-medium border-b-2 border-orange-500 transition-colors">
            AWS Free Tier
          </button>
          <button className="text-gray-700 hover:text-orange-500 px-3 py-2 transition-colors">
            Overview
          </button>
          <div className="relative">
            <button 
              className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 px-3 py-2 transition-colors"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span>Free Tier Categories</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
            </button>
            {showDropdown && (
              <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 min-w-64 z-50">
                <div className="p-4">
                  <div className="mb-4">
                    <h3 className="font-medium text-gray-900 mb-2">Artificial Intelligence</h3>
                    <div className="bg-gradient-to-r from-purple-400 to-cyan-400 text-white px-3 py-2 rounded-lg">
                      <span className="text-sm">Machine Learning</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {freeTierCategories.slice(2).map((category, index) => (
                      <button
                        key={index}
                        className="block w-full text-left text-gray-700 hover:text-orange-500 py-1 text-sm transition-colors"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <button className="text-gray-700 hover:text-orange-500 px-3 py-2 transition-colors">
            How to Create an Account
          </button>
          <button className="text-gray-700 hover:text-orange-500 px-3 py-2 transition-colors">
            Legacy Free Tier
          </button>
          <button className="text-gray-700 hover:text-orange-500 px-3 py-2 transition-colors">
            FAQs
          </button>
          <button className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 px-3 py-2 transition-colors">
            <span>More</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between">
            <button className="text-gray-700 font-medium border-b-2 border-orange-500 px-3 py-2">
              AWS Free Tier
            </button>
            <button 
              className="p-2 hover:bg-rose-200 rounded transition-colors"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          
          {mobileNavOpen && (
            <div className="mt-4 pb-4 border-t border-rose-200">
              <nav className="flex flex-col space-y-2 pt-4">
                <button className="text-gray-700 hover:text-orange-500 px-3 py-2 text-left transition-colors">
                  Overview
                </button>
                <button 
                  className="flex items-center justify-between text-gray-700 hover:text-orange-500 px-3 py-2 text-left transition-colors"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <span>Free Tier Categories</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                </button>
                {showDropdown && (
                  <div className="ml-4 pl-4 border-l border-rose-300 space-y-2">
                    {freeTierCategories.map((category, index) => (
                      <button
                        key={index}
                        className="block w-full text-left text-gray-600 hover:text-orange-500 py-1 text-sm transition-colors"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
                <button className="text-gray-700 hover:text-orange-500 px-3 py-2 text-left transition-colors">
                  How to Create an Account
                </button>
                <button className="text-gray-700 hover:text-orange-500 px-3 py-2 text-left transition-colors">
                  Legacy Free Tier
                </button>
                <button className="text-gray-700 hover:text-orange-500 px-3 py-2 text-left transition-colors">
                  FAQs
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}