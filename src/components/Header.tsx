import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X, Bot } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-900 p-2 rounded-lg">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-blue-900">ArtisanAI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#marketplace" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              Marketplace
            </a>
            <a href="#artisans" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              Artisans
            </a>
            <a href="#categories" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              Categories
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              About
            </a>
          </nav>

          {/* Search and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Ask AI to find products..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              />
            </div>
            <button className="p-2 text-gray-700 hover:text-blue-900 transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-blue-900 transition-colors">
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-900"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <a href="#marketplace" className="text-gray-700 hover:text-blue-900 font-medium">
                Marketplace
              </a>
              <a href="#artisans" className="text-gray-700 hover:text-blue-900 font-medium">
                Artisans
              </a>
              <a href="#categories" className="text-gray-700 hover:text-blue-900 font-medium">
                Categories
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-900 font-medium">
                About
              </a>
              <div className="pt-2">
                <input
                  type="text"
                  placeholder="Ask AI to find products..."
                  className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;