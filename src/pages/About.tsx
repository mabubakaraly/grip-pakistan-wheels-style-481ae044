
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Users, Truck, Shield } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: "1995", title: "Company Founded", description: "Started as a small tyre trading business in Lahore" },
    { year: "2005", title: "First Warehouse", description: "Established our first distribution center" },
    { year: "2015", title: "National Expansion", description: "Extended operations across major cities in Pakistan" },
    { year: "2024", title: "Industry Leader", description: "Serving 500+ clients with premium tyre solutions" }
  ];

  const values = [
    { icon: Award, title: "Quality First", description: "Every product meets international standards" },
    { icon: Users, title: "Customer Focus", description: "Building lasting relationships through exceptional service" },
    { icon: Truck, title: "Reliability", description: "Dependable delivery and consistent performance" },
    { icon: Shield, title: "Trust", description: "Transparent business practices and honest dealings" }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Story of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              For nearly three decades, Malik Trading Co. has been Pakistan's trusted partner 
              in premium tyre distribution, connecting businesses with world-class solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Our Journey</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-lg">{milestone.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 text-center hover:bg-gray-800/70 transition-all duration-300">
                  <value.icon className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
