import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-primary-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Transform Your Ideas Into Reality
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
              We help innovative startups and enterprises build exceptional digital products that drive growth and create impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary hover-float">
                Get Started
              </button>
              <button className="btn-secondary hover-float">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative fade-up" style={{ animationDelay: '200ms' }}>
            <div className="aspect-square rounded-2xl bg-gradient-radial from-primary-100 to-transparent p-8">
              <div className="w-full h-full rounded-xl bg-white shadow-lg"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary-200/30 to-accent/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 