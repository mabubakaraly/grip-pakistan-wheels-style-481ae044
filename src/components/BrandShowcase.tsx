
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BrandShowcase = () => {
  const brands = [
    {
      name: "ADVANCE TYRES",
      logo: "A TYRE ADVANCE",
      color: "yellow",
      description: "Advance Tyres, a brand under Guizhou Tyre Co., Ltd. (GTC Group), specializes in manufacturing a wide range of tyres for applications such as trucks, buses, agriculture, forestry, mining, and industrial use. Established in 1958, the company operates globally with production facilities in China and Vietnam, offering products under the brands Advance and Samson. Committed to innovation, quality, and sustainability, it emphasizes collaboration and excellence to meet the demands of a competitive global market.",
      buttonText: "Read More"
    },
    {
      name: "MAGNUM-V TYRES", 
      logo: "MAGNUM-V",
      color: "red",
      description: "Thailand, a leading natural rubber producer, excels in creating value-added products like tyres for all vehicles. Magnum-V (Vee Rubber Group) stands out as a top tyre manufacturer and exporter, offering a diverse range from go-kart to commercial tyres. Combining premium materials with cutting-edge technology, Magnum-V delivers exceptional quality for export and domestic markets. Malik Trading Co. proudly serves as the exclusive distributor of Magnum-V tyres in Pakistan, ensuring superior performance and reliability for diverse applications.",
      buttonText: "Read More"
    },
    {
      name: "RUNWAY TYRES",
      logo: "RUNWAY", 
      color: "blue",
      description: "Runway Tires, a flagship brand by Giti Tire, is recognized for its innovation, sustainability, and global presence in over 130 countries. Known for superior quality and performance, Runway Tires cater to diverse driving needs. Malik Trading Co. proudly represents Runway Tires in Pakistan, delivering premium products designed for safety, efficiency, and reliability.",
      buttonText: "Read More"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                {/* Brand header with colored border */}
                <div className={`h-32 relative border-4 ${
                  brand.color === 'yellow' ? 'border-yellow-400 bg-gradient-to-br from-gray-100 to-gray-200' :
                  brand.color === 'red' ? 'border-red-500 bg-gradient-to-br from-gray-100 to-gray-200' :
                  'border-blue-500 bg-gradient-to-br from-gray-100 to-gray-200'
                } flex items-center justify-center`}>
                  <div className={`text-center ${
                    brand.color === 'yellow' ? 'text-blue-800' :
                    brand.color === 'red' ? 'text-red-600' :
                    'text-blue-700'
                  }`}>
                    {brand.name === "ADVANCE TYRES" && (
                      <div className="bg-gradient-to-r from-yellow-400 to-blue-600 text-white px-4 py-2 rounded">
                        <div className="text-lg font-bold">A TYRE</div>
                        <div className="text-sm">ADVANCE</div>
                      </div>
                    )}
                    {brand.name === "MAGNUM-V TYRES" && (
                      <div className="bg-red-600 text-white px-6 py-3 rounded-full">
                        <div className="text-lg font-bold">MAGNUM-V</div>
                      </div>
                    )}
                    {brand.name === "RUNWAY TYRES" && (
                      <div className="text-blue-700">
                        <div className="text-2xl font-bold">RUNWAY</div>
                        <div className="w-16 h-1 bg-blue-500 mx-auto rounded"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Tire images placeholder */}
                  <div className="absolute bottom-2 right-2 flex space-x-1">
                    <div className="w-8 h-8 bg-black rounded-full opacity-60"></div>
                    <div className="w-8 h-8 bg-black rounded-full opacity-60"></div>
                    <div className="w-8 h-8 bg-black rounded-full opacity-60"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-center mb-4">{brand.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {brand.description}
                  </p>
                  <div className="text-center">
                    <Button variant="link" className="text-red-600 hover:text-red-700 p-0">
                      {brand.buttonText} →
                    </Button>
                  </div>
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
