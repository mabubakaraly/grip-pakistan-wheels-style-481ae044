
import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="text-lg font-bold">Malik Trading Co.</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Leading tire distributor in Pakistan, connecting businesses with premium quality tires from trusted global brands.
            </p>
            <div className="flex space-x-3">
              <Facebook className="h-5 w-5 text-blue-500 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-pink-500 hover:text-pink-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dealers Network</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Corporate Clients</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Downloads</a></li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Brands</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Advance Tyres</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Magnum-V Tyres</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Runway Tyres</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Commercial Tyres</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Industrial Tyres</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-red-500" />
                <span className="text-gray-400">Lahore, Pakistan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-500" />
                <span className="text-gray-400">+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-500" />
                <span className="text-gray-400">info@maliktradingco.pk</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Malik Trading Co. All rights reserved. | Premium Tire Distribution in Pakistan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
