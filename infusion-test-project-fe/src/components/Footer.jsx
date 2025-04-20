import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-primary-200 text-transparent bg-clip-text">
              Brands by Infusion
            </span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
              Contact
            </a>
          </div>
          <div className="mt-4 md:mt-0 text-gray-400 text-sm">
            © 2024 Elevate by Infusion. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 