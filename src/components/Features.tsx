
import React from 'react';
import { Check } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Form Filling Assistance",
      description: "Step-by-step guidance for all application forms including CAP registration and choice filling",
      icon: "📝"
    },
    {
      title: "College Selection",
      description: "Expert advice on choosing the right engineering college based on your rank, preferences, and future goals",
      icon: "🏫"
    },
    {
      title: "Cutoff Analysis",
      description: "In-depth analysis of previous years' cutoffs to predict your chances at top engineering colleges",
      icon: "📊"
    },
    {
      title: "Document Verification",
      description: "Ensure all your documents meet the requirements for a smooth admission process",
      icon: "📋"
    },
    {
      title: "Category Benefits",
      description: "Detailed guidance on category/quota benefits including TFWS, EWS, Minority, etc.",
      icon: "🎯"
    },
    {
      title: "Post-Admission Support",
      description: "Help with scholarships, hostels, and other post-admission processes",
      icon: "🎓"
    }
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="bg-learntech-blue/10 text-learntech-blue font-medium py-1 px-4 rounded-full">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Comprehensive Engineering Counselling</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From form filling to final admission, we provide end-to-end support throughout your engineering admission journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl card-shadow p-6 border border-gray-100 animate-on-scroll"
              data-delay={index * 100}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">All Features Designed For Your Success</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {['JEE & MHT CET Counselling', 'Round-wise Updates', 'Preference List Creation', 'Choice Filling Assistance', 'Placement Data Analysis', 'College Comparisons'].map((item, index) => (
              <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                <Check className="text-learntech-green mr-2" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
