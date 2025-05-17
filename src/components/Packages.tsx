
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Packages = () => {
  const packages = [
    {
      name: "Basic Package",
      price: "₹499",
      features: [
        "College list based on rank",
        "DTE CAP round explanation",
        "Form filling guidance (CAP registration)",
        "Minor doubt solving via WhatsApp or calls"
      ],
      isPopular: false
    },
    {
      name: "Standard Package",
      price: "₹1,299",
      features: [
        "Everything in Basic Package",
        "Personalized preference list",
        "Category/Quota benefit analysis (TFWS, EWS, Minority, etc.)",
        "Document verification help",
        "Online choice filling & locking assistance",
        "Monitoring college cutoff updates"
      ],
      isPopular: true
    },
    {
      name: "Premium Package",
      price: "₹2,499",
      features: [
        "Everything in Standard Package",
        "Complete hand-holding till final admission",
        "College comparison (branches, placements, infra, crowd)",
        "Help with JEE + MHT CET parallel strategies",
        "Round-wise updates + alerts",
        "Post-admission help (scholarship, hostel, etc.)"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="packages" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-learntech-blue/5 to-learntech-green/5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-learntech-green/5 to-learntech-blue/5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="bg-learntech-green/10 text-learntech-green font-medium py-1 px-4 rounded-full">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Choose Your Counselling Package</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the package that best suits your needs and budget. All packages include expert guidance from our experienced counsellors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden card-shadow animate-on-scroll relative ${
                pkg.isPopular ? 'border-2 border-learntech-green transform scale-105 z-10' : 'border border-gray-200'
              }`}
              data-delay={index * 100}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-learntech-green text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <div className="bg-white p-6 md:p-8">
                <h3 className="font-bold text-xl mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                </div>
                
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="text-learntech-green mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <a 
                  href="https://forms.office.com/r/szdY2H1g5b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button 
                    className={`w-full ${
                      pkg.isPopular 
                        ? 'bg-learntech-green hover:bg-learntech-green-dark' 
                        : 'bg-learntech-blue hover:bg-learntech-blue-dark'
                    }`}
                  >
                    {pkg.isPopular ? 'Recommended Choice' : 'Register Now'}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-2">Need a custom package?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="rounded-lg bg-white border border-gray-200 px-6 py-3 shadow-sm">
              <span className="text-gray-800">Group counselling (batch of 10): <strong>₹3,999</strong></span>
            </div>
            <div className="rounded-lg bg-white border border-gray-200 px-6 py-3 shadow-sm">
              <span className="text-gray-800">Combo packs for siblings/friends: <strong>Discounted Rates</strong></span>
            </div>
          </div>
          
          <div className="mt-6">
            <a 
              href="https://api.whatsapp.com/send/?phone=919067572205&text=Hi%20LearnTech,%20I'm%20interested%20in%20a%20custom%20counselling%20package.%20Can%20you%20help%20me?" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-learntech-blue hover:underline font-medium"
            >
              Contact us for custom packages <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
