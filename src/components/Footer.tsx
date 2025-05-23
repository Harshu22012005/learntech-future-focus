
import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/f3315a41-1591-42c1-a1f2-bae47cc4f666.png" 
                alt="LearnTech Logo" 
                className="h-16 mr-3 bg-white p-2 rounded-lg" 
              />
              <h3 className="text-xl font-bold">LearnTech</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for engineering admissions counselling. We help students navigate the complex world of engineering college admissions in India.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/learntech_2215/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-learntech-blue transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="mailto:learntech2215@gmail.com" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-learntech-blue transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="https://chat.whatsapp.com/LsXIdSWapEQHNzGaaAuBpF" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-learntech-blue transition-all"
                aria-label="WhatsApp Group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9.5 15.5c1.333.667 3.667.667 5 0" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#packages" className="text-gray-400 hover:text-white transition-colors">Packages</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="text-learntech-green mr-2" />
                <a href="tel:+919067572205" className="text-gray-400 hover:text-white transition-colors">
                  +91 9067572205
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-learntech-green mr-2" />
                <a href="mailto:learntech2215@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  learntech2215@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Instagram size={16} className="text-learntech-green mr-2" />
                <a 
                  href="https://www.instagram.com/learntech_2215/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  @learntech_2215
                </a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-learntech-green mr-2">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9.5 15.5c1.333.667 3.667.667 5 0" />
                </svg>
                <a 
                  href="https://chat.whatsapp.com/LsXIdSWapEQHNzGaaAuBpF" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Join WhatsApp Group
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <a 
                href="https://forms.office.com/r/szdY2H1g5b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-learntech-blue hover:bg-learntech-blue-dark text-white font-medium py-2 px-4 rounded-lg transition-colors inline-block"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} LearnTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
