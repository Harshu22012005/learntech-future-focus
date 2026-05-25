
import React from 'react';
import { Award, Briefcase, Rocket, GraduationCap, Users, Sparkles } from 'lucide-react';

const WhyChooseUs = () => {
  const credentials = [
    {
      icon: Award,
      title: "NEC Finalist, IIT Bombay",
      description: "Recognized finalist at the National Entrepreneurship Challenge at IIT Bombay."
    },
    {
      icon: GraduationCap,
      title: "Founder, LearnTech & E-CELL MESWCOE",
      description: "Founding member driving the Entrepreneurship Cell at MESWCOE, Pune."
    },
    {
      icon: Briefcase,
      title: "Business Mentor — Topmate.io",
      description: "Verified mentor guiding students on engineering admissions and careers."
    },
    {
      icon: Rocket,
      title: "Founder & CEO — Xplorevo Pvt Ltd",
      description: "Leading an ed-tech venture focused on personalized student counselling."
    },
    {
      icon: Users,
      title: "Campus Ambassador — IIT Mandi & IIT Guwahati",
      description: "Official representative for premier IITs across student outreach programs."
    },
    {
      icon: Sparkles,
      title: "1-on-1 Personalized Mentorship",
      description: "Dedicated guidance with 24×7 doubt-solving tailored to your goals."
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="container-custom relative">
        <div className="text-center mb-16">
          <span className="bg-learntech-green/10 text-learntech-green font-medium py-1 px-4 rounded-full">
            Our Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Why Choose <span className="bg-gradient-to-r from-learntech-blue to-learntech-green bg-clip-text text-transparent">XTN Admissions?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built by industry-recognized mentors with verified credentials from India's top engineering ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((c, index) => {
            const Icon = c.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 card-shadow hover-3d animate-on-scroll overflow-hidden"
                data-delay={index * 100}
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br from-learntech-blue/10 to-learntech-green/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-learntech-blue to-learntech-blue-dark text-white mb-4 shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 leading-snug">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 relative rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center overflow-hidden animate-on-scroll">
          <div className="absolute inset-0 bg-gradient-to-r from-learntech-blue via-learntech-blue-dark to-learntech-green" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8 relative">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
              Start Your Engineering Journey With Expert Guidance
            </h3>
            <p className="text-white/90">
              Don't navigate the complex world of engineering admissions alone. Our team provides personalized support to help you make the best decisions for your future.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center relative">
            <a
              href="https://forms.office.com/r/szdY2H1g5b"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-learntech-blue font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-all shadow-2xl text-center w-full md:w-auto hover-3d"
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
