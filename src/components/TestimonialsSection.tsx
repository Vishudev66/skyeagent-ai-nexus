
import React from 'react';

const TestimonialCard = ({
  quote,
  name,
  title,
  company,
  imageUrl,
  delay
}: {
  quote: string;
  name: string;
  title: string;
  company: string;
  imageUrl: string;
  delay: string;
}) => {
  return (
    <div 
      className="card animate-fade-in opacity-0" 
      style={{ animationDelay: delay }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <svg className="h-8 w-8 text-primary/40" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>
        <p className="text-gray-700 mb-6 flex-grow">{quote}</p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-sm text-gray-600">{title}, {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard 
            quote="The AI automation solution from skyeAgent has transformed our customer support. We now handle 3x the volume with the same team, and our response times have dropped from hours to minutes."
            name="Sarah Johnson"
            title="Head of Operations"
            company="TechFlow Inc."
            imageUrl="/placeholder.svg"
            delay="0.1s"
          />
          
          <TestimonialCard 
            quote="Implementing AI voice agents for our appointment scheduling has been a game-changer. Our staff can focus on high-value tasks while the AI handles routine calls flawlessly."
            name="Michael Chen"
            title="CEO"
            company="HealthConnect"
            imageUrl="/placeholder.svg"
            delay="0.2s"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
