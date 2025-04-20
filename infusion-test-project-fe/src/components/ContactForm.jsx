import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    plan: 'monthly'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="section-padding bg-primary-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 w-72 h-72 bg-primary-400 rounded-full"></div>
        <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-primary-400 rounded-full"></div>
      </div>

      <div className="container-custom relative">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 fade-up">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 text-transparent bg-clip-text">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll be in touch soon.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 fade-up">
            <div className="bg-white p-8 rounded-2xl shadow-lg relative">
              {/* Form grid layout */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Pricing Plan
                  </label>
                  <select
                    id="plan"
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    required
                  >
                    <option value="monthly">Monthly Plan ($49/month)</option>
                    <option value="annual">Annual Plan ($499/year)</option>
                  </select>
                </div>
              </div>

              {/* Centered, smaller submit button */}
              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-3 btn-primary text-sm font-medium rounded-lg hover:scale-105 transition-transform duration-300"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 