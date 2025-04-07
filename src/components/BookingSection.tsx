
import React from 'react';
import { Calendar, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BookingSection = () => {
  const handleBookCall = () => {
    window.open('https://cal.com/vishu.g/30min', '_blank');
  };

  return (
    <section id="booking" className="section-padding bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Book a Free Consultation</h2>
          <p className="section-subtitle">
            Ready to explore how AI can transform your business? Schedule a 30-minute call with our team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-custom p-8 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Why Book a Call?</h3>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                  <Calendar className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Personalized Solution</h4>
                  <p className="text-gray-600">Get tailored AI automation strategies for your specific business needs.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                  <Clock className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Quick Discovery</h4>
                  <p className="text-gray-600">30-minute focused session to identify how AI can solve your biggest challenges.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">No Obligation</h4>
                  <p className="text-gray-600">Free consultation with zero commitment required.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">Choose a time that works for you and we'll connect to discuss your AI automation needs.</p>
                
                <Button 
                  onClick={handleBookCall} 
                  size="lg" 
                  className="bg-blue-purple-gradient hover:shadow-lg transition-all duration-300 w-full md:w-auto"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule 30-Minute Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
