import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-blue-600 py-20">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Ready to Find Your Dream Space?</h2>
        <p className="mb-8 text-lg">Join thousands of satisfied clients in finding the perfect home or office today.</p>
        <a
          href="#marketplace"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          Explore Marketplace
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
