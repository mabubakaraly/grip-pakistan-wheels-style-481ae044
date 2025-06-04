
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Working with Malik Trading Co. has been a game-changer for us. Their expertise, support, and premium tyre selection are unmatched in the industry.",
      name: "Ahmed Malik",
      role: "Distributor",
      rating: 5
    },
    {
      text: "Malik Trading Co. has been our go-to partner for tyres. Their reliable service and high-quality products have consistently helped us meet our customers' needs. Truly exceptional!",
      name: "Ali Kashan", 
      role: "Automotive Retailer",
      rating: 5
    },
    {
      text: "The team at Malik Trading Co. is outstanding. Their competitive pricing, prompt delivery, and top-tier brands have streamlined our operations and boosted our business.",
      name: "Abdullah Butt",
      role: "Fleet Manager", 
      rating: 5
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex justify-center mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-500 text-center mb-12">
          What Our Clients Are Saying:
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <StarRating rating={testimonial.rating} />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-black text-pink-500 hover:bg-gray-800 px-12 py-4 text-xl font-bold rounded-none">
            Become A Distributor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
