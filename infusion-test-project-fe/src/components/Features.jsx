import React, { useEffect } from 'react';

const features = [
  {
    title: 'Brand Strategy',
    description: 'Get a personalized brand strategy crafted by experts, with actionable steps to establish your unique presence in the market.',
    icon: (
      <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </div>
    )
  },
  {
    title: 'Content Creation',
    description: 'Access our AI-powered content creation tools and templates to produce engaging content that resonates with your audience.',
    icon: (
      <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    )
  },
  {
    title: 'Growth Analytics',
    description: "Track your brand's growth with comprehensive analytics and insights, helping you make data-driven decisions.",
    icon: (
      <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
    )
  }
];

const Features = () => {
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
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Core Features of{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 text-transparent bg-clip-text">
              Elevate
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to build a powerful personal brand
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 fade-up hover-float"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-8 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center group-hover:text-primary-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 