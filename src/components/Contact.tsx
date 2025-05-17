
import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    // Since we're only doing frontend, we'll just redirect to WhatsApp
    window.open('https://api.whatsapp.com/send/?phone=919067572205&text&type=phone_number', '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="bg-learntech-green/10 text-learntech-green font-medium py-1 px-4 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our counselling services? Reach out to us through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="Your Phone Number" 
                  className="w-full" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your Message" 
                  className="w-full min-h-[120px]" 
                  required 
                />
              </div>
              <a
                href="https://api.whatsapp.com/send/?phone=919067572205&text&type=phone_number"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <Button 
                  type="submit" 
                  className="w-full bg-learntech-blue hover:bg-learntech-blue-dark"
                >
                  Send Message
                </Button>
              </a>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-learntech-blue/10 text-learntech-blue mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a href="tel:+919067572205" className="text-gray-600 hover:text-learntech-blue transition-colors">
                    +91 9067572205
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-learntech-blue/10 text-learntech-blue mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:learntech2215@gmail.com" className="text-gray-600 hover:text-learntech-blue transition-colors">
                    learntech2215@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-learntech-blue/10 text-learntech-blue mr-4">
                  <Instagram size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Instagram</h4>
                  <a href="https://www.instagram.com/learntech_2215/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-learntech-blue transition-colors">
                    @learntech_2215
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://forms.office.com/r/szdY2H1g5b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-learntech-green/10 hover:bg-learntech-green/20 text-learntech-green font-medium py-3 px-4 rounded-lg transition-colors text-center"
                >
                  Book Free Consultation
                </a>
                <a 
                  href="https://api.whatsapp.com/send/?phone=919067572205&text&type=phone_number" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500/10 hover:bg-green-500/20 text-green-600 font-medium py-3 px-4 rounded-lg transition-colors text-center"
                >
                  Join WhatsApp Group
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
