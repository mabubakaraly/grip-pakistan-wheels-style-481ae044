
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Car, Truck, Tractor, Building } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      icon: Car,
      title: "Passenger Car Tyres",
      description: "High-performance tyres for sedans, hatchbacks, and SUVs",
      features: ["All-Season Performance", "Fuel Efficient", "Comfortable Ride", "Long Lasting"],
      image: "bg-gradient-to-br from-blue-600 to-cyan-500"
    },
    {
      icon: Truck,
      title: "Commercial Vehicle Tyres",
      description: "Heavy-duty tyres for trucks, buses, and commercial vehicles",
      features: ["High Load Capacity", "Durability", "Cost Effective", "Retreadable"],
      image: "bg-gradient-to-br from-red-600 to-pink-500"
    },
    {
      icon: Tractor,
      title: "Agricultural Tyres",
      description: "Specialized tyres for tractors and farming equipment",
      features: ["Soil Protection", "Traction Control", "Field Friendly", "Robust Design"],
      image: "bg-gradient-to-br from-green-600 to-emerald-500"
    },
    {
      icon: Building,
      title: "Industrial Tyres",
      description: "Heavy-duty tyres for construction and industrial machinery",
      features: ["Extreme Durability", "Load Handling", "Puncture Resistant", "All Terrain"],
      image: "bg-gradient-to-br from-purple-600 to-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Premium Tyre
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover our comprehensive range of tyres designed for every vehicle type and application.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-3xl overflow-hidden hover:border-orange-500 transition-all duration-300 group">
                <div className={`h-48 ${category.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="relative z-10 p-8 h-full flex items-center justify-center">
                    <category.icon className="h-20 w-20 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
