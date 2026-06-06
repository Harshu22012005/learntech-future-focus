
import React from 'react';
import { Phone, Mail, Instagram, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/40 relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-learntech-blue/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-learntech-green/10 rounded-full blur-3xl animate-pulse-slow" />

      <div className="container-custom relative">
        <div className="text-center mb-12">
          <span className="bg-learntech-green/10 text-learntech-green font-medium py-1 px-4 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Contact Campus Counsel</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about MHT-CET, CAP Rounds, or engineering admissions? Reach out through any of these channels — we typically respond within hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <a href="tel:+919067572205" className="group glass-card p-8 text-center hover-3d">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-learntech-blue/10 text-learntech-blue mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <Phone size={24} aria-hidden="true" />
            </div>
            <h3 className="font-semibold mb-1">Phone</h3>
            <p className="text-gray-600">+91 9067572205</p>
          </a>

          <a href="mailto:learntech2215@gmail.com" className="group glass-card p-8 text-center hover-3d">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-learntech-blue/10 text-learntech-blue mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <Mail size={24} aria-hidden="true" />
            </div>
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-gray-600 break-all">learntech2215@gmail.com</p>
          </a>

          <a
            href="https://www.instagram.com/campus_counsel_1/"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-card p-8 text-center hover-3d"
          >
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-learntech-blue/10 text-learntech-blue mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <Instagram size={24} aria-hidden="true" />
            </div>
            <h3 className="font-semibold mb-1">Instagram</h3>
            <p className="text-gray-600">@campus_counsel_1</p>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <a
            href="https://forms.office.com/r/szdY2H1g5b"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center hover-3d"
          >
            Book Free Counselling Session
          </a>
          <a
            href="https://chat.whatsapp.com/LsXIdSWapEQHNzGaaAuBpF"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-center hover-3d flex items-center justify-center gap-2"
          >
            <MessageSquare size={18} aria-hidden="true" /> Talk to a Mentor
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
