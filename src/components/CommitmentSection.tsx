
import React from 'react';
import { Button } from '@/components/ui/button';

const CommitmentSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-8">
          Discover Our Commitment to Innovation and Excellence
        </h2>
        
        <p className="text-lg text-gray-700 max-w-6xl mx-auto mb-12 leading-relaxed">
          At Malik Trading Co., we lead the way in tyre distribution, connecting businesses with top-quality tyres from the world's most trusted brands. Renowned for our reliability, competitive pricing, and unmatched service, we're dedicated to driving success for our partners. From passenger cars to commercial fleets and industrial machinery, we deliver the perfect tyres for every journey and every challenge.
        </p>

        <div className="mb-12">
          <Button className="bg-black text-pink-500 hover:bg-gray-800 px-12 py-4 text-xl font-bold rounded-none">
            Shop Tyres
          </Button>
        </div>

        <h3 className="text-4xl font-bold text-blue-500 mb-12">
          Performance You Can Rely On
        </h3>

        <div className="grid md:grid-cols-4 gap-8 text-left">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Extensive Inventory:</h4>
            <p className="text-gray-600 text-sm italic">"Wide range of tyres for all vehicle types."</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Global Distribution Network:</h4>
            <p className="text-gray-600 text-sm italic">"Fast, reliable delivery worldwide."</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Expert Support:</h4>
            <p className="text-gray-600 text-sm italic">"Dedicated team to help you choose the best."</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Competitive Pricing:</h4>
            <p className="text-gray-600 text-sm italic">"Get the best value for top-quality tyres."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
