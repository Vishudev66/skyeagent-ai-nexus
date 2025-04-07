
import React from 'react';
import { Search, Code, Bot } from 'lucide-react';

const ProcessStep = ({ 
  number, 
  icon, 
  title, 
  description, 
  delay 
}: { 
  number: string; 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay: string;
}) => {
  return (
    <div 
      className="relative animate-fade-in opacity-0" 
      style={{ animationDelay: delay }}
    >
      <div className="absolute -left-4 md:left-auto md:-top-4 w-8 h-8 rounded-full bg-blue-purple-gradient flex items-center justify-center text-white font-bold z-10">
        {number}
      </div>
      <div className="card h-full ml-6 md:ml-0 md:mt-6 pl-6 md:pl-8">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Our simple 3-step process to get your AI automation up and running
          </p>
        </div>

        <div className="relative">
          {/* Process Steps Line - Desktop */}
          <div className="hidden md:block absolute left-0 right-0 top-10 h-1 bg-gray-100 z-0"></div>
          
          {/* Process Steps Line - Mobile */}
          <div className="md:hidden absolute top-0 bottom-0 left-0 w-1 bg-gray-100 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessStep 
              number="1"
              icon={<Search size={28} className="text-primary" />}
              title="Discover"
              description="We analyze your business needs and identify automation opportunities that will have the biggest impact."
              delay="0.1s"
            />
            
            <ProcessStep 
              number="2"
              icon={<Code size={28} className="text-primary" />}
              title="Build"
              description="Our team designs and builds custom AI agents tailored to your specific requirements and workflows."
              delay="0.2s"
            />
            
            <ProcessStep 
              number="3"
              icon={<Bot size={28} className="text-primary" />}
              title="Automate"
              description="We deploy your AI agents and provide ongoing support to ensure they're working effectively for your business."
              delay="0.3s"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
