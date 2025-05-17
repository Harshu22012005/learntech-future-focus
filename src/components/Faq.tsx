
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const [openItem, setOpenItem] = useState<string | null>("item-0");
  
  const faqs = [
    {
      question: "When should I start the engineering counselling process?",
      answer: "It's best to start preparing for counselling right after your 12th board exams or entrance tests like JEE/MHT-CET. This gives you enough time to research colleges, understand the admission process, and prepare all required documents."
    },
    {
      question: "How does LearnTech help with college selection?",
      answer: "We analyze your entrance exam rank, preferences, career goals, and past cutoff trends to recommend colleges where you have a good chance of admission. We provide detailed information about each college's placement records, facilities, and reputation to help you make an informed decision."
    },
    {
      question: "Do you help with both JEE and MHT-CET counselling?",
      answer: "Yes, our counsellors are experienced with both JEE and MHT-CET counselling processes. We can help you strategize for parallel admissions and choose the best path based on your scores and college preferences."
    },
    {
      question: "What documents do I need for the engineering admission process?",
      answer: "Typically, you'll need your 10th and 12th marksheets, entrance exam score cards, domicile certificate, category certificates (if applicable), Aadhaar card, passport-sized photographs, and other documents as specified by the admission authority. We'll provide you with a complete checklist based on your specific situation."
    },
    {
      question: "How do I maximize my chances of getting into a good college?",
      answer: "We help you create an optimal preference list based on your rank and previous years' cutoffs, ensure your application has no errors, advise on quota/category benefits you can utilize, and stay updated on seat vacancy during each round of counselling to make strategic decisions."
    },
    {
      question: "Can you help with engineering branches selection too?",
      answer: "Absolutely! We provide detailed information about different engineering branches, including future scope, curriculum, required aptitude, and placement trends to help you choose a branch that aligns with your interests and career goals."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="bg-learntech-blue/10 text-learntech-blue font-medium py-1 px-4 rounded-full">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about engineering admissions and our counselling services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl card-shadow">
          <Accordion type="single" collapsible className="w-full" value={openItem || ""} onValueChange={(value) => setOpenItem(value)}>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0 px-6">
                <AccordionTrigger className="text-left font-medium py-4 hover:text-learntech-blue transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions? Get in touch with us directly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://api.whatsapp.com/send/?phone=919067572205&text&type=phone_number" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              Chat on WhatsApp
            </a>
            <a 
              href="mailto:learntech2215@gmail.com" 
              className="btn-outline flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
