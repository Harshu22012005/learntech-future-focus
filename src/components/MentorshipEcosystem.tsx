import React from 'react';
import {
  Compass, GitBranch, ClipboardList, UserCheck, Map,
  Wallet, Home, Briefcase, Users, MessageCircle
} from 'lucide-react';

const items = [
  { icon: Compass, title: 'Personalized College Prediction', desc: 'Realistic shortlist based on your CET / JEE percentile, category, and preferences.' },
  { icon: GitBranch, title: 'Branch Selection Guidance', desc: 'Compare Computer, AI & DS, IT, Mech, ECE, Civil and emerging branches with scope.' },
  { icon: ClipboardList, title: 'CAP Round Strategy Planning', desc: 'Option form filling, preference list optimisation, round-wise allotment analysis.' },
  { icon: UserCheck, title: 'Faculty Expert Consultation', desc: 'Connect with HODs and professors from reputed Maharashtra engineering colleges.' },
  { icon: Map, title: 'Career Roadmap Planning', desc: 'Aligned roadmap covering internships, certifications, GATE, MBA or placements.' },
  { icon: Wallet, title: 'Scholarship & Financial Guidance', desc: 'TFWS, EBC, EWS, minority, government scholarships and fee-structure clarity.' },
  { icon: Home, title: 'Hostel & Campus Insights', desc: 'Real student insights on hostels, food, transport, culture, and campus life.' },
  { icon: Briefcase, title: 'Placement-Oriented Decision Support', desc: 'Branch + college combinations evaluated on actual placement data.' },
  { icon: Users, title: 'Alumni & Senior Student Insights', desc: 'Honest reviews from current students and alumni of your shortlisted colleges.' },
  { icon: MessageCircle, title: 'Dedicated Mentor Assistance', desc: '24×7 WhatsApp and call support from your assigned mentor till admission.' },
];

const MentorshipEcosystem = () => {
  return (
    <section id="mentorship" className="section-padding relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/40">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-learntech-blue/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-learntech-green/10 rounded-full blur-3xl" />
      <div className="container-custom relative">
        <div className="text-center mb-12">
          <span className="bg-learntech-blue/10 text-learntech-blue font-medium py-1 px-4 rounded-full">
            Our Mentorship Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Everything You Need, <span className="bg-gradient-to-r from-learntech-blue to-learntech-green bg-clip-text text-transparent">In One Place</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We combine industry expertise, experienced faculty guidance, real admission data, and personalized counselling to help students choose the right college, branch, and career path.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <li
                key={i}
                className="group glass-card p-5 hover-3d animate-on-scroll flex gap-4"
                data-delay={i * 60}
              >
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-learntech-blue to-learntech-green text-white shadow-md group-hover:scale-110 transition-transform">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{it.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{it.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default MentorshipEcosystem;
