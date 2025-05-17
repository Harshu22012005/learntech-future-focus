
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Example result date - adjust as needed
  const resultDate = new Date('2025-06-15T00:00:00');

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-green-50 pt-20">
      <div className="container-custom min-h-[80vh] flex flex-col md:flex-row items-center justify-between py-12 md:py-24">
        <div className={`w-full md:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block bg-learntech-blue/10 text-learntech-blue font-medium py-1 px-4 rounded-full mb-4">
            Engineering Counselling Service
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Your Path to the <span className="text-learntech-blue">Perfect Engineering</span> College
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg">
            Expert guidance for 12th pass students to navigate engineering admissions, choose the right college, and secure your future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="https://forms.office.com/r/szdY2H1g5b" target="_blank" rel="noopener noreferrer">
              <Button 
                className="btn-primary group w-full sm:w-auto flex items-center justify-center gap-2"
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
                className="border-learntech-blue text-learntech-blue hover:bg-learntech-blue/10 w-full sm:w-auto flex items-center gap-2"
                size="lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9.5 15.5c1.333.667 3.667.667 5 0" />
                </svg>
                Join WhatsApp Group
              </Button>
            </a>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg inline-block">
            <p className="text-gray-700 font-medium mb-1">Engineering Counselling Begins In:</p>
            <CountdownTimer targetDate={resultDate} />
          </div>
        </div>
        
        <div className={`w-full md:w-1/2 mt-12 md:mt-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-learntech-green/20 rounded-full filter blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-learntech-blue/20 rounded-full filter blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" 
              alt="Engineering Consultation" 
              className="rounded-lg shadow-xl object-cover w-full h-[500px] card-shadow"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
