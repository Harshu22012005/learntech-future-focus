
import React from 'react';
import {
  Award, Briefcase, Rocket, GraduationCap, Users, Sparkles,
  UserCheck, Phone, Target, BookOpen, Clock, TrendingUp
} from 'lucide-react';

const WhyChooseUs = () => {
  const credentials = [
    { icon: Award, title: "NEC Finalist — IIT Bombay", description: "Recognized finalist at the National Entrepreneurship Challenge hosted by IIT Bombay, demonstrating excellence in entrepreneurship, innovation, and student leadership." },
    { icon: Rocket, title: "Founder, LearnTech & E-CELL MESWCOE", description: "Founding member actively driving entrepreneurship initiatives, startup awareness, innovation programs, and student development activities at MESWCOE Pune." },
    { icon: Briefcase, title: "Business Mentor — Topmate", description: "Verified mentor helping students navigate engineering admissions, career planning, higher education opportunities, and professional growth." },
    { icon: GraduationCap, title: "Founder & CEO — Xplorevo Pvt Ltd", description: "Leading an education-focused technology venture dedicated to personalized counselling, student success, and career development." },
    { icon: Users, title: "Campus Ambassador — IIT Mandi & IIT Guwahati", description: "Official representative responsible for student outreach, community engagement, and awareness programs for premier IIT institutions." },
    { icon: UserCheck, title: "Experienced Engineering Faculty Network", description: "Access guidance from highly experienced professors, HODs, academic mentors, and industry experts from reputed engineering colleges across Maharashtra." },
    { icon: Sparkles, title: "One-to-One Personalized Mentorship", description: "Receive customized counselling sessions tailored to your CET percentile, academic profile, budget, branch preferences, and career goals." },
    { icon: Phone, title: "Direct Faculty Consultation", description: "Get connected with experienced engineering faculties and academic experts for college selection, branch comparison, placement insights, and career guidance." },
    { icon: Target, title: "CAP Round Strategy Support", description: "Comprehensive support for option form filling, college preference lists, seat allotment analysis, and admission decision-making." },
    { icon: BookOpen, title: "Engineering Career Guidance", description: "Explore opportunities in Computer Engineering, AI & Data Science, IT, Electronics, Mechanical, Civil, Robotics, and emerging technology fields." },
    { icon: Clock, title: "24×7 Student Support", description: "Dedicated assistance through WhatsApp, phone calls, and online mentoring sessions to resolve admission-related doubts quickly." },
    { icon: TrendingUp, title: "Proven Student Success Framework", description: "Data-driven counselling methodology helping students secure admissions in top engineering colleges across Maharashtra." },
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
            Why Choose <span className="bg-gradient-to-r from-learntech-blue to-learntech-green bg-clip-text text-transparent">Campus Counsel?</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Built by industry-recognized mentors, experienced faculty members, and verified professionals from India's leading engineering and entrepreneurship ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((c, index) => {
            const Icon = c.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 card-shadow hover-3d animate-on-scroll overflow-hidden"
                data-delay={index * 70}
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br from-learntech-blue/10 to-learntech-green/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-learntech-blue to-learntech-blue-dark text-white mb-4 shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} aria-hidden="true" />
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
              Ready to Secure Your Engineering Admission?
            </h3>
            <p className="text-white/90">
              Get personalized counselling from experienced mentors and faculty experts who understand Maharashtra engineering admissions inside out.
            </p>
          </div>
          <div className="md:w-1/3 flex flex-col gap-3 relative w-full">
            <a
              href="https://forms.office.com/r/szdY2H1g5b"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-learntech-blue font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-all shadow-2xl text-center hover-3d"
            >
              Book Free Counselling Session
            </a>
            <a
              href="https://chat.whatsapp.com/LsXIdSWapEQHNzGaaAuBpF"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-learntech-green hover:bg-learntech-green-dark text-white font-semibold px-6 py-3 rounded-lg transition-all text-center"
            >
              Talk to a Mentor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
