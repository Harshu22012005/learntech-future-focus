
import React from 'react';
import { Check } from 'lucide-react';

const WhyChooseUs = () => {
  const credentials = [
    {
      title: "NEC Finalist IIT Bombay",
      description: "Recognized finalist at National Entrepreneurship Challenge at IIT Bombay"
    },
    {
      title: "Campus Ambassador",
      description: "Officially representing top engineering institutions"
    },
    {
      title: "1-on-1 Support",
      description: "Personalized guidance tailored to your specific needs and goals"
    },
    {
      title: "24x7 Doubt Solving",
      description: "Round-the-clock assistance whenever you need help"
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="bg-learntech-green/10 text-learntech-green font-medium py-1 px-4 rounded-full">
            Our Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Why Choose LearnTech?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We bring expertise, experience, and dedication to help you navigate the complex engineering admission process in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((credential, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl card-shadow p-6 border border-gray-100 animate-on-scroll"
              data-delay={index * 100}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-learntech-blue/10 text-learntech-blue mb-4">
                <Check size={24} />
              </div>
              <h3 className="font-bold text-xl mb-2">{credential.title}</h3>
              <p className="text-gray-600">{credential.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-learntech-blue to-learntech-blue-dark rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center animate-on-scroll">
          <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
              Start Your Engineering Journey With Expert Guidance
            </h3>
            <p className="text-white/80">
              Don't navigate the complex world of engineering admissions alone. Our team provides personalized support to help you make the best decisions for your future.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <a 
              href="https://forms.office.com/r/szdY2H1g5b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-learntech-blue font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl text-center w-full md:w-auto"
            >
              Book Your Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
