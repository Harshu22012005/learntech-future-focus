import React from 'react';
import { Check } from 'lucide-react';

const badges = [
  'Industry Mentors',
  'Experienced Faculties',
  'Verified Counsellors',
  'Student-Centric Approach',
  'Personalized Guidance',
  'Maharashtra Engineering Experts',
  'CAP Round Specialists',
  '24×7 Student Support',
];

const TrustBadges = () => (
  <section aria-label="Trust badges" className="py-8 bg-white border-y border-gray-100">
    <div className="container-custom">
      <ul className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
        {badges.map((b) => (
          <li
            key={b}
            className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-learntech-blue bg-learntech-blue/5 border border-learntech-blue/15 rounded-full px-3 py-1.5"
          >
            <Check size={14} className="text-learntech-green" aria-hidden="true" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default TrustBadges;
