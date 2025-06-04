
import React from 'react';

const TrustedBrands = () => {
  const companies = [
    { name: "Pakistan State Oil", code: "PSO", color: "bg-green-600" },
    { name: "Pakistan Air Force", code: "PAF", color: "bg-blue-600" },
    { name: "National Highway Authority", code: "NHA", color: "bg-orange-600" },
    { name: "Lucky Cement", code: "LUCKY", color: "bg-red-700" },
    { name: "Fauji Cement", code: "FAUJI", color: "bg-green-700" },
    { name: "Habib Construction", code: "HABIB", color: "bg-amber-600" },
    { name: "Descon Engineering", code: "DESCON", color: "bg-gray-700" },
    { name: "Al Bayrak Group", code: "BAYRAK", color: "bg-red-600" },
    { name: "China Gezhouba", code: "CGGC", color: "bg-yellow-600" },
    { name: "Frontier Works", code: "FWO", color: "bg-blue-700" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Industry
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Leaders Nationwide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From government institutions to major corporations, Pakistan's leading organizations choose us for their tyre solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {companies.map((company, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className={`w-16 h-16 ${company.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-sm text-center leading-tight">
                    {company.code}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 text-center leading-tight">
                  {company.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-white rounded-full px-8 py-4 shadow-lg">
            <span className="text-2xl font-bold text-orange-500 mr-2">500+</span>
            <span className="text-gray-700 font-medium">Companies Trust Our Services</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
