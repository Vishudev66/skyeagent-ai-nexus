
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold flex items-center">
            <span className="gradient-text">skye</span>
            <span>Agent</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary">Services</a>
            <a href="#process" className="text-gray-700 hover:text-primary">Process</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary">Testimonials</a>
            <a href="#about" className="text-gray-700 hover:text-primary">About</a>
            <a href="#contact" className="text-gray-700 hover:text-primary">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4 flex flex-col space-y-3">
            <a href="#services" className="text-gray-700 hover:text-primary py-2" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#process" className="text-gray-700 hover:text-primary py-2" onClick={() => setIsOpen(false)}>Process</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary py-2" onClick={() => setIsOpen(false)}>Testimonials</a>
            <a href="#about" className="text-gray-700 hover:text-primary py-2" onClick={() => setIsOpen(false)}>About</a>
            <a href="#contact" className="text-gray-700 hover:text-primary py-2" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
