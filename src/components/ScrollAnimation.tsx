
import React, { useEffect } from 'react';

const ScrollAnimation: React.FC = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-delay') || 0;
            setTimeout(() => {
              entry.target.classList.add('animated');
            }, Number(delay));
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      elements.forEach((element) => {
        observer.observe(element);
      });
    };

    // Run on initial load
    animateOnScroll();
    
    // Re-run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return null;
};

export default ScrollAnimation;
