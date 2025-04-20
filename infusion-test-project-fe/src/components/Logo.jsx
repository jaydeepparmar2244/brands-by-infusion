import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-4xl font-bold bg-gradient-to-r from-accent to-blue-600 text-transparent bg-clip-text animate-gradient">
        Brands by Infusion
      </span>
      <span className="text-sm text-gray-500">|</span>
      <span className="text-2xl font-semibold text-accent">Elevate</span>
    </div>
  );
};

export default Logo; 