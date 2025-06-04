
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Malik Trading Co. transformed our fleet operations. Their expertise and premium tyre selection have significantly reduced our maintenance costs while improving performance.",
      name: "Ahmed Malik",
      role: "Fleet Operations Manager",
      company: "Express Logistics",
      rating: 5,
      avatar: "AM"
    },
    {
      text: "Outstanding service and unbeatable quality! Their team helped us choose the perfect tyres for our diverse vehicle range. Highly recommend their professional approach.",
      name: "Ali Kashan",
      role: "General Manager", 
      company: "AutoHub Pakistan",
      rating: 5,
      avatar: "AK"
    },
    {
      text: "Reliable partner for all our commercial tyre needs. Competitive pricing, fast delivery, and exceptional customer support make them our preferred choice.",
      name: "Abdullah Butt",
      role: "Procurement Head",
      company: "National Transport",
      rating: 5,
      avatar: "AB"
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex justify-center mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Partners
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped succeed
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-orange-400 mb-4" />
                <StarRating rating={testimonial.rating} />
                <p className="text-gray-300 mb-6 leading-relaxed italic text-lg">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">{testimonial.name}</p>
                    <p className="text-orange-400 text-sm font-medium">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-12 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            Join Our Partner Network
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
