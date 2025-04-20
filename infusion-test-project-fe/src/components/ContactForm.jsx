import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    plan: 'monthly'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }

      setSubmitStatus({ 
        type: 'success', 
        message: 'Form submitted successfully! We will contact you soon.' 
      });
      setFormData({ name: '', email: '', plan: 'monthly' });
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: error.message || 'An error occurred while submitting the form. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
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

              {submitStatus.message && (
                <div className={`mt-4 p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 text-green-800' 
                    : 'bg-red-50 text-red-800'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 btn-primary text-sm font-medium rounded-lg hover:scale-105 transition-transform duration-300 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
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