
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const logoUrl = "/campus-counsel-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', sectionId: 'hero' },
    { name: 'Why Us', sectionId: 'why-us' },
    { name: 'Services', sectionId: 'features' },
    { name: 'Mentorship', sectionId: 'mentorship' },
    { name: 'Packages', sectionId: 'packages' },
    { name: 'FAQs', sectionId: 'faq' },
    { name: 'Contact', sectionId: 'contact' },
  ];

  return (
    <header className={cn(
      "w-full py-4 transition-all duration-300 z-50",
      isScrolled && "sticky-header"
    )}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="Campus Counsel — Guiding Your Engineering Journey"
            className="h-12 md:h-14 rounded-lg drop-shadow-lg transition-transform duration-300 hover:scale-105"
            width="56"
            height="56"
          />
          <span className="hidden sm:block font-poppins font-bold text-lg md:text-xl text-learntech-blue">
            Campus <span className="text-learntech-green">Counsel</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6" aria-label="Primary">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.sectionId)}
              className="text-gray-700 hover:text-learntech-blue font-medium transition-colors"
            >
              {link.name}
            </button>
          ))}
          <a
            href="https://forms.office.com/r/szdY2H1g5b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" className="bg-learntech-blue hover:bg-learntech-blue-dark">
              Book Free Counselling
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="text-gray-700 hover:text-learntech-blue p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            aria-label="Close menu"
            className="text-gray-700 hover:text-learntech-blue p-2"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col items-center space-y-6 mt-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.sectionId)}
              className="text-gray-700 hover:text-learntech-blue font-medium text-lg transition-colors"
            >
              {link.name}
            </button>
          ))}
          <a
            href="https://forms.office.com/r/szdY2H1g5b"
            target="_blank"
            rel="noopener noreferrer"
            className="w-2/3 mt-6"
          >
            <Button className="w-full bg-learntech-blue hover:bg-learntech-blue-dark">
              Book Free Counselling
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
