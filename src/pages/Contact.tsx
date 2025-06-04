
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Get in
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to discuss your tyre requirements? Our expert team is here to help you 
              find the perfect solution for your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="+92 300 1234567"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Subject</label>
                  <select className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>General Inquiry</option>
                    <option>Product Information</option>
                    <option>Partnership Opportunity</option>
                    <option>Customer Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3 text-lg rounded-xl">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-900/50 border border-gray-700 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-orange-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">Main Office</p>
                      <p className="text-gray-300">Lahore, Punjab, Pakistan</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-orange-400" />
                    <div>
                      <p className="text-white font-semibold">+92 300 1234567</p>
                      <p className="text-gray-300 text-sm">24/7 Support</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-orange-400" />
                    <div>
                      <p className="text-white font-semibold">info@maliktradingco.pk</p>
                      <p className="text-gray-300 text-sm">Business Inquiries</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-orange-400" />
                    <div>
                      <p className="text-white font-semibold">Mon - Fri: 9:00 - 18:00</p>
                      <p className="text-gray-300 text-sm">Business Hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-700 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-300">Fast Response Time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-300">Expert Consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-300">Competitive Pricing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-300">Nationwide Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
