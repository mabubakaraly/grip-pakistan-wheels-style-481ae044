
import React from 'react';
import { Search, Menu, Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-gray-800">
          <div className="flex items-center space-x-4 text-gray-400">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+92 300 1234567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@maliktradingco.pk</span>
            </div>
          </div>
          <div className="text-orange-400 font-medium">
            Premium Tyre Solutions Since 1995
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">MT</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Malik Trading Co.</h1>
              <p className="text-xs text-orange-400">Premium Tyre Distribution</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-orange-400 font-medium border-b-2 border-orange-400 pb-1">Home</a>
            <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">About</a>
            <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Products</a>
            <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Brands</a>
            <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</a>
          </nav>

          {/* Search and menu */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Search tyres..." 
                className="bg-gray-800 text-white pl-4 pr-10 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <button className="lg:hidden text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
