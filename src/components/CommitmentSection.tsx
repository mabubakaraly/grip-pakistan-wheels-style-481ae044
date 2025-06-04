
import React from 'react';
import { Button } from '@/components/ui/button';
import { Truck, Users, Award, Globe } from 'lucide-react';

const CommitmentSection = () => {
  const features = [
    {
      icon: Truck,
      title: "Extensive Inventory",
      description: "Comprehensive range covering passenger, commercial, and industrial vehicles"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "International partnerships ensuring fastest delivery across Pakistan"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Professional team providing personalized tyre solutions and support"
    },
    {
      icon: Award,
      title: "Best Value",
      description: "Competitive pricing without compromising on quality or service"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Excellence in Every
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Mile You Drive
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Malik Trading Co., we revolutionize tyre distribution through innovation, 
            reliability, and unwavering commitment to quality. From passenger vehicles to 
            heavy machinery, we deliver performance that exceeds expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Experience the Difference?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust us for their tyre needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 text-lg rounded-xl">
              Shop Tyres Now
            </Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700 px-8 py-3 text-lg rounded-xl">
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
