import React from 'react';

const HowItWorks = () => {
  const steps = [
    { id: 1, number: 1, title: 'Sign Up', description: 'Create an account and browse through our listings.' },
    { id: 2, number: 2, title: 'Choose a Property', description: 'Explore homes, offices, and other spaces to find what you need.' },
    { id: 3, number: 3, title: 'Contact Owner', description: 'Get in touch with the property owner to finalize the deal.' },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="p-6 bg-white rounded-lg shadow-lg">
              <span className="bg-blue-300 p-[20px] rounded-[50px] w-[300px] font-bold text-[25px]">{step.number}</span>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4 pt-[25px]">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
