import React from 'react';

const PricingTier = ({ name, price, period, features, isPopular }) => (
  <div className={`relative bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 ${isPopular ? 'ring-2 ring-primary-500' : ''}`}>
    <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
      <div className={`absolute transform rotate-45 bg-gradient-to-r ${isPopular ? 'from-primary-500 to-primary-400' : 'from-gray-200 to-gray-100'} w-28 h-28 -top-14 -right-14`}></div>
    </div>

    {isPopular && (
      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium text-primary-600 bg-primary-50 mb-4">
        Most Popular
      </span>
    )}
    <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
    <div className="mt-4 flex items-baseline">
      <span className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 text-transparent bg-clip-text">${price}</span>
      <span className="ml-1 text-gray-500">/{period}</span>
    </div>
    <div className="mt-8 space-y-4">
      <div className="h-px bg-gradient-to-r from-primary-100 to-transparent"></div>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="h-px bg-gradient-to-r from-transparent via-primary-100 to-transparent"></div>
    </div>
  </div>
);

const Pricing = () => {
  const tiers = [
    {
      name: 'Monthly Plan',
      price: 49,
      period: 'month',
      features: [
        'Brand Strategy Sessions',
        'Content Creation Tools',
        'Basic Analytics',
        'Email Support',
        'Social Media Templates'
      ]
    },
    {
      name: 'Annual Plan',
      price: 499,
      period: 'year',
      isPopular: true,
      features: [
        'Everything in Monthly Plan',
        'Priority Support',
        'Advanced Analytics',
        'Custom Brand Templates',
        '2 Free Strategy Sessions',
        '20% Savings vs Monthly'
      ]
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-200 to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 text-transparent bg-clip-text">
            Pricing Plans
          </h2>
          <p className="text-lg text-gray-600">
            Choose the plan that best fits your needs. Save 20% with annual billing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto fade-up">
          {tiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 