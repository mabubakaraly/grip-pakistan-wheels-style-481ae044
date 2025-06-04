
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex items-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Advance Tyres Logo */}
          <div className="mb-8 inline-block bg-gradient-to-r from-yellow-400 to-blue-600 p-6 rounded-lg">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider">
              A<span className="text-yellow-300">TYRE</span>
              <div className="text-2xl md:text-3xl mt-2">ADVANCE</div>
            </h1>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Advance Tyres
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Premium Quality Commercial Tyres
          </p>
          
          <Button className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-3 text-lg font-semibold border-2 border-white hover:border-gray-200 transition-all duration-300">
            READ MORE
          </Button>
        </div>
      </div>

      {/* Tire silhouettes */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="flex space-x-4">
          <div className="w-32 h-32 bg-white rounded-full"></div>
          <div className="w-40 h-40 bg-white rounded-full"></div>
          <div className="w-36 h-36 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
