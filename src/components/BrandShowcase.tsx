
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Star } from 'lucide-react';

const BrandShowcase = () => {
  const brands = [
    {
      name: "ADVANCE TYRES",
      subtitle: "Premium Commercial Solutions",
      description: "Leading manufacturer specializing in trucks, buses, agriculture, and industrial applications. Part of Guizhou Tyre Co., Ltd. with global operations since 1958.",
      features: ["Commercial Grade", "Industrial Use", "Global Quality"],
      color: "from-blue-600 to-cyan-500"
    },
    {
      name: "MAGNUM-V",
      subtitle: "Thai Excellence in Rubber",
      description: "Thailand's premier tyre manufacturer offering comprehensive range from passenger to commercial vehicles. Combining premium materials with cutting-edge technology.",
      features: ["Premium Materials", "Advanced Tech", "Export Quality"],
      color: "from-red-600 to-pink-500"
    },
    {
      name: "RUNWAY",
      subtitle: "Innovation & Sustainability",
      description: "Flagship brand by Giti Tire, recognized globally in 130+ countries for superior quality, innovation, and commitment to sustainable mobility solutions.",
      features: ["Global Presence", "Eco-Friendly", "Safety First"],
      color: "from-purple-600 to-indigo-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Premium
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Brand Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Partnering with world-renowned manufacturers to bring you the finest tyres for every application
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border border-gray-700 bg-gray-800/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                {/* Brand header */}
                <div className={`h-40 bg-gradient-to-br ${brand.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 p-6 h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{brand.name}</h3>
                    <p className="text-white/90 text-sm">{brand.subtitle}</p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full"></div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    {brand.description}
                  </p>

                  <div className="space-y-3">
                    {brand.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-orange-400 fill-current" />
                        <span className="text-sm text-gray-300 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full border-gray-600 text-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
                  >
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
