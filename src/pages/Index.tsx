
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BrandShowcase from '@/components/BrandShowcase';
import CommitmentSection from '@/components/CommitmentSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TrustedBrands from '@/components/TrustedBrands';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BrandShowcase />
      <CommitmentSection />
      <TestimonialsSection />
      <TrustedBrands />
      <Footer />
    </div>
  );
};

export default Index;
