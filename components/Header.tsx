"use client";

import { Button } from "./ui/button";
import { Search, ChevronDown, User, Check, Menu, X } from "lucide-react";
import { useState } from "react";

const languages = [
  { code: "ar", name: "عربي", label: "Arabic" },
  { code: "vi", name: "Tiếng Việt", label: "Vietnamese" },
  { code: "id", name: "Bahasa Indonesia", label: "Indonesian" },
  { code: "tr", name: "Türkçe", label: "Turkish" },
  { code: "de", name: "Deutsch", label: "German" },
  { code: "ru", name: "Русский", label: "Russian" },
  { code: "en", name: "English", label: "English", selected: true },
  { code: "th", name: "ไทย", label: "Thai" },
  { code: "es", name: "Español", label: "Spanish" },
  { code: "ja", name: "日本語", label: "Japanese" },
  { code: "fr", name: "Français", label: "French" },
  { code: "ko", name: "한국어", label: "Korean" },
  { code: "it", name: "Italiano", label: "Italian" },
  { code: "zh-cn", name: "中文 (简体)", label: "Chinese Simplified" },
  { code: "pt", name: "Português", label: "Portuguese" },
  { code: "zh-tw", name: "中文 (繁體)", label: "Chinese Traditional" }
];

export function Header() {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top dark bar */}
      <div className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <span className="text-sm hidden sm:inline">Support</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-6">
              <div className="relative">
                <button 
                  className="flex items-center space-x-1 text-sm hover:text-orange-400 transition-colors"
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                >
                  <span>🌐</span>
                  <span className="hidden sm:inline">English</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {showLanguageDropdown && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 w-80 z-50 max-h-96 overflow-y-auto">
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-2">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            className={`flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                              lang.selected 
                                ? 'bg-purple-600 text-white' 
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                            onClick={() => {
                              setSelectedLanguage(lang.code);
                              setShowLanguageDropdown(false);
                            }}
                          >
                            <span>{lang.name}</span>
                            {lang.selected && <Check className="w-4 h-4" />}
                          </button>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <label className="flex items-center space-x-2 text-gray-700">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Detect language</span>
                        </label>
                        <p className="text-xs text-gray-500 mt-1">Automatically translated to English</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button className="text-sm hover:text-orange-400 transition-colors hidden sm:inline">Contact us</button>
              <button className="flex items-center space-x-1 text-sm hover:text-orange-400 transition-colors hidden md:flex">
                <span>Support</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center space-x-1 text-sm hover:text-orange-400 transition-colors hidden md:flex">
                <span>My account</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 sm:space-x-8">
              {/* AWS Logo */}
              <div className="flex items-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-sm">aws</span>
                </div>
              </div>
              
              {/* Navigation - Desktop */}
              <nav className="hidden xl:flex items-center space-x-6">
                <button className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded transition-colors">
                  Agentic AI
                </button>
                <button className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded transition-colors">
                  Discover AWS
                </button>
                <button className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded transition-colors">
                  Products
                </button>
                <button className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded transition-colors">
                  Solutions
                </button>
                <button className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded transition-colors">
                  Pricing
                </button>
                <button className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded transition-colors">
                  Resources
                </button>
              </nav>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <Button variant="outline" className="text-gray-700 border-gray-300 hidden sm:flex">
                Sign in to console
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base px-3 sm:px-4">
                Create account
              </Button>
              <button 
                className="xl:hidden p-2 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="xl:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-2 pt-4">
                <button className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded text-left transition-colors">
                  Agentic AI
                </button>
                <button className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded text-left transition-colors">
                  Discover AWS
                </button>
                <button className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded text-left transition-colors">
                  Products
                </button>
                <button className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded text-left transition-colors">
                  Solutions
                </button>
                <button className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded text-left transition-colors">
                  Pricing
                </button>
                <button className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded text-left transition-colors">
                  Resources
                </button>
                <div className="pt-2 border-t border-gray-200 mt-2 sm:hidden">
                  <Button variant="outline" className="w-full text-gray-700 border-gray-300 mb-2">
                    Sign in to console
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}