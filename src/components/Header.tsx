
import React from 'react';
import { Search, Facebook, Instagram } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Malik Trading Co.</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-red-600 font-medium border-b-2 border-red-600 pb-1">HOME</a>
            <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">ABOUT US</a>
            <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">PRODUCTS</a>
            <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">DEALERS NETWORK</a>
            <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">DOWNLOADS</a>
            <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">CORPORATE CLIENTS</a>
            <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">CONTACT US</a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search" 
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <div className="flex space-x-2">
              <Facebook className="h-6 w-6 text-blue-600 hover:text-blue-700 cursor-pointer" />
              <Instagram className="h-6 w-6 text-pink-600 hover:text-pink-700 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
