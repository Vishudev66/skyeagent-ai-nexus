
import React from 'react';
import { Users, Lightbulb, Check } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="absolute -inset-1 bg-blue-purple-gradient rounded-2xl blur opacity-20"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-custom border border-gray-100">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Users className="mr-2 text-primary" size={24} />
                  Our Mission
                </h3>
                <p className="text-gray-700 mb-6">
                  At skyeAgent, we're on a mission to democratize AI automation for businesses of all sizes. We believe that powerful AI tools should be accessible to everyone, not just large enterprises with big budgets.
                </p>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Lightbulb className="mr-2 text-primary" size={24} />
                  Our Values
                </h3>
                <ul className="space-y-3">
                  {[
                    "Customer-centric solutions tailored to real business needs",
                    "Ethical AI development with transparency and trust",
                    "Continuous innovation to stay ahead of the curve",
                    "Empowering businesses through AI education and support"
                  ].map((value, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 text-green-500 shrink-0 mt-1" size={18} />
                      <span className="text-gray-700">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="section-title">About skyeAgent</h2>
            <p className="text-lg text-gray-600 mb-6">
              We're a team of AI specialists, developers, and automation experts who are passionate about helping businesses leverage the power of artificial intelligence.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2023, we've already helped dozens of companies across various industries implement AI solutions that save time, reduce costs, and improve customer experiences.
            </p>
            <p className="text-lg text-gray-600">
              Our approach combines technical expertise with a deep understanding of business processes, ensuring that our AI solutions deliver real, measurable value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
