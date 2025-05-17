
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import Features from '@/components/Features';
import Packages from '@/components/Packages';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollAnimation />
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <Features />
        <Packages />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
