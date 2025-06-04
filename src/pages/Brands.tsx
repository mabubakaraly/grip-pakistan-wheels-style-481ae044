
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ExternalLink, Star, Award } from 'lucide-react';

const Brands = () => {
  const brands = [
    {
      name: "ADVANCE TYRES",
      subtitle: "Premium Commercial Solutions",
      description: "Leading manufacturer specializing in trucks, buses, agriculture, and industrial applications. Part of Guizhou Tyre Co., Ltd. with global operations since 1958.",
      features: ["Commercial Grade", "Industrial Use", "Global Quality", "ISO Certified"],
      color: "from-blue-600 to-cyan-500",
      founded: "1958",
      countries: "60+"
    },
    {
      name: "MAGNUM-V",
      subtitle: "Thai Excellence in Rubber",
      description: "Thailand's premier tyre manufacturer offering comprehensive range from passenger to commercial vehicles. Combining premium materials with cutting-edge technology.",
      features: ["Premium Materials", "Advanced Tech", "Export Quality", "Eco-Friendly"],
      color: "from-red-600 to-pink-500",
      founded: "1975",
      countries: "45+"
    },
    {
      name: "RUNWAY",
      subtitle: "Innovation & Sustainability",
      description: "Flagship brand by Giti Tire, recognized globally in 130+ countries for superior quality, innovation, and commitment to sustainable mobility solutions.",
      features: ["Global Presence", "Eco-Friendly", "Safety First", "R&D Excellence"],
      color: "from-purple-600 to-indigo-500",
      founded: "1993",
      countries: "130+"
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
              World-Class
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Brand Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We partner with globally recognized manufacturers to bring you the finest tyres 
              that combine innovation, quality, and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {brands.map((brand, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-3xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className={`p-12 bg-gradient-to-br ${brand.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10">
                      <h2 className="text-4xl font-bold text-white mb-4">{brand.name}</h2>
                      <p className="text-white/90 text-xl mb-8">{brand.subtitle}</p>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <div className="text-3xl font-bold text-white">{brand.founded}</div>
                          <div className="text-white/80">Founded</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-white">{brand.countries}</div>
                          <div className="text-white/80">Countries</div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full"></div>
                  </div>
                  <div className="p-12">
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">{brand.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {brand.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <Star className="h-5 w-5 text-orange-400 fill-current" />
                          <span className="text-gray-300 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors">
                      <span>Learn More</span>
                      <ExternalLink className="h-5 w-5" />
                    </button>
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

export default Brands;
