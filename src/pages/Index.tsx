
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustBadges from '@/components/TrustBadges';
import WhyChooseUs from '@/components/WhyChooseUs';
import Features from '@/components/Features';
import Packages from '@/components/Packages';
import MentorshipEcosystem from '@/components/MentorshipEcosystem';
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
        <title>Campus Counsel — Maharashtra Engineering Admission & CAP Round Counselling</title>
        <meta name="description" content="Campus Counsel is Maharashtra's trusted engineering admission and career guidance platform. Expert MHT-CET, JEE & CAP Round counselling by verified mentors and faculty." />
        <link rel="canonical" href="https://xtnadmisssions.lovable.app/" />
        <meta property="og:url" content="https://xtnadmisssions.lovable.app/" />
      </Helmet>
      <ScrollAnimation />
      <Navbar />
      <main id="main">
        <HeroSection />
        <TrustBadges />
        <WhyChooseUs />
        <Features />
        <MentorshipEcosystem />
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
