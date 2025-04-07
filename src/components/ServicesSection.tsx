
import React from 'react';
import { Code, Mic, Workflow } from 'lucide-react';

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay: string; 
}) => {
  return (
    <div 
      className="card animate-fade-in opacity-0" 
      style={{ animationDelay: delay }}
    >
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We build AI solutions that automate your business processes and help you scale effortlessly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Code size={28} className="text-primary" />}
            title="AI Agents"
            description="Custom AI agents built with or without code that can handle tasks, answer queries, and provide 24/7 support for your business."
            delay="0.1s"
          />
          
          <ServiceCard 
            icon={<Mic size={28} className="text-primary" />}
            title="AI Voice Agents"
            description="Conversational voice agents that can handle calls, appointments, and provide personalized support with natural-sounding voices."
            delay="0.2s"
          />
          
          <ServiceCard 
            icon={<Workflow size={28} className="text-primary" />}
            title="AI Workflow Automation"
            description="End-to-end automation solutions that streamline your business processes, reduce manual work, and increase efficiency."
            delay="0.3s"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
