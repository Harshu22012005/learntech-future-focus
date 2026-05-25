
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden pt-20">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-blue-50/80 to-green-50/85 backdrop-blur-[2px]" />

      {/* Futuristic background layers */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.07] pointer-events-none" />
      <div className="absolute top-20 -left-20 w-80 h-80 bg-learntech-blue/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-learntech-green/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-float" />


      <div className="container-custom min-h-[85vh] flex flex-col md:flex-row items-center justify-between py-12 md:py-24 relative">
        <div className={`w-full md:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block bg-white/70 backdrop-blur-md border border-learntech-blue/20 text-learntech-blue font-medium py-1.5 px-4 rounded-full mb-4 shadow-sm">
            ⚡ XTN Admissions · Xplorevo Tech Network
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Your Path to the{' '}
            <span className="text-gradient animate-gradient">Perfect Engineering</span>{' '}
            College
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg">
            Expert, personalized guidance for 12th pass students to navigate engineering admissions, choose the right college, and secure your future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="https://forms.office.com/r/szdY2H1g5b" target="_blank" rel="noopener noreferrer">
              <Button
                className="btn-primary group w-full sm:w-auto flex items-center justify-center gap-2 animate-glow"
                size="lg"
              >
                Book Free Consultation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a
              href="https://chat.whatsapp.com/LsXIdSWapEQHNzGaaAuBpF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-learntech-blue text-learntech-blue hover:bg-learntech-blue/10 w-full sm:w-auto flex items-center gap-2 hover-3d"
                size="lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                </svg>
                Join WhatsApp Group
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
            <span className="glass-card px-3 py-1.5">✅ JEE / MHT-CET / NEET Counselling</span>
            <span className="glass-card px-3 py-1.5">🎯 Personalized Mentorship</span>
          </div>
        </div>

        <div className={`w-full md:w-1/2 mt-12 md:mt-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative perspective-1000">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-learntech-green/30 rounded-full filter blur-xl animate-float-slow"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-learntech-blue/30 rounded-full filter blur-xl animate-float"></div>

            <div className="relative glass-card p-8 animate-tilt-in hover-3d">
              <img
                src="/xtn-logo.png"
                alt="XTN Admissions"
                className="w-full max-w-md mx-auto animate-float-slow drop-shadow-2xl"
              />
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="bg-white/60 rounded-xl p-3 border border-learntech-blue/10">
                  <div className="text-2xl font-bold text-learntech-blue">500+</div>
                  <div className="text-xs text-gray-600">Students Guided</div>
                </div>
                <div className="bg-white/60 rounded-xl p-3 border border-learntech-green/10">
                  <div className="text-2xl font-bold text-learntech-green">50+</div>
                  <div className="text-xs text-gray-600">Top Colleges</div>
                </div>
                <div className="bg-white/60 rounded-xl p-3 border border-learntech-blue/10">
                  <div className="text-2xl font-bold text-learntech-blue">24×7</div>
                  <div className="text-xs text-gray-600">Mentor Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
