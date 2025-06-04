
import React from 'react';

const TrustedBrands = () => {
  const brands = [
    { name: "Pakistan State Oil", logo: "PSO" },
    { name: "Pakistan Air Force", logo: "PAF" },
    { name: "Development Company", logo: "DEV" },
    { name: "NHA", logo: "NHA" },
    { name: "Lucky Cement", logo: "LUCKY" },
    { name: "Fauji Cement", logo: "FAUJI" },
    { name: "Habib Construction", logo: "HABIB" },
    { name: "Descon", logo: "DESCON" },
    { name: "Al Bayrak", logo: "BAYRAK" },
    { name: "CGGC", logo: "CGGC" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-500 text-center mb-12">
          Trusted & Used By 100% Brands
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="text-center">
                {brand.name === "Pakistan State Oil" && (
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">PSO</span>
                  </div>
                )}
                {brand.name === "Pakistan Air Force" && (
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <div className="text-white text-xs font-bold">
                      <div>⭐</div>
                      <div>PAF</div>
                    </div>
                  </div>
                )}
                {brand.name === "Development Company" && (
                  <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-xs">DEV</span>
                  </div>
                )}
                {brand.name === "NHA" && (
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">NHA</span>
                  </div>
                )}
                {brand.name === "Lucky Cement" && (
                  <div className="w-20 h-20 bg-red-600 border-4 border-gray-800 flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-xs">LUCKY</span>
                  </div>
                )}
                {brand.name === "Fauji Cement" && (
                  <div className="w-20 h-20 bg-green-700 flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-xs">FAUJI</span>
                  </div>
                )}
                {brand.name === "Habib Construction" && (
                  <div className="w-20 h-20 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-xs">HABIB</span>
                  </div>
                )}
                {brand.name === "Descon" && (
                  <div className="w-20 h-20 bg-red-600 flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">DESCON</span>
                  </div>
                )}
                {brand.name === "Al Bayrak" && (
                  <div className="w-20 h-20 bg-red-500 flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-xs">BAYRAK</span>
                  </div>
                )}
                {brand.name === "CGGC" && (
                  <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">CGGC</span>
                  </div>
                )}
                <p className="text-xs text-gray-600 font-medium">{brand.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
