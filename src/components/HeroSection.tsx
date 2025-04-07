
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-pattern pt-20">
      <div className="absolute -z-10 inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Let AI <span className="gradient-text">work for you</span> while you sleep
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Unlock the power of AI automation for your business. Our custom AI agents work 24/7, so you don't have to.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#services" className="btn-secondary">
                Explore Services
              </a>
            </div>
          </div>
          <div className="lg:flex justify-center items-center hidden">
            <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="absolute -inset-0.5 bg-blue-purple-gradient rounded-2xl blur opacity-30"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-custom overflow-hidden">
                <div className="bg-gray-50 rounded-lg p-4 mb-4 animate-pulse">
                  <div className="h-2 bg-gray-200 rounded-full max-w-[80%] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full max-w-[70%]"></div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span className="text-lg font-semibold">AI</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">Your AI agent is working on your tasks...</p>
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <div className="h-8 w-20 rounded-md bg-gray-100"></div>
                  <div className="h-8 w-24 rounded-md bg-primary/80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
