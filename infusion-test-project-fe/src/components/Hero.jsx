import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.fade-up').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding pt-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="fade-up">
            <span className="text-primary-600 font-semibold mb-4 block">
              Brands by Infusion presents
            </span>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-primary-400 text-transparent bg-clip-text">
                Elevate
              </span>
              <br />
              <span className="text-4xl lg:text-5xl text-gray-900">
                Your Personal Brand
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed">
              The all-in-one platform for entrepreneurs to build, grow, and maintain a powerful personal brand that stands out.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                className="btn-primary hover-float"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Journey
              </button>
              <button 
                className="btn-secondary hover-float"
                onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative fade-up" style={{ animationDelay: '200ms' }}>
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl hover-float">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80" 
                alt="Personal Brand Dashboard" 
                className="rounded-lg w-full object-cover aspect-video"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-200/20 to-primary-400/20 transform rotate-3 rounded-2xl"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.1),transparent_70%)]"></div>
    </section>
  );
};

export default Hero; 