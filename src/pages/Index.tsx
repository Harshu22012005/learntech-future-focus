
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import Features from '@/components/Features';
import Packages from '@/components/Packages';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import Loader from '@/components/Loader';
import CookieConsent from '@/components/CookieConsent';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>XTN Admissions — Engineering Counselling for 12th Pass Students in India</title>
        <meta name="description" content="Personalized engineering admissions counselling by XTN Admissions. Expert mentorship for JEE, MHT-CET & NEET aspirants. Book a free consultation today." />
        <link rel="canonical" href="https://learntech-future-focus.lovable.app/" />
      </Helmet>
      <ScrollAnimation />
      <Navbar />
      <main id="main">
        <HeroSection />
        <WhyChooseUs />
        <Features />
        <Packages />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieConsent />
    </div>
  );
};

export default Index;
