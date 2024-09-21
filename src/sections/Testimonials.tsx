import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-gray-600 mb-4">“Lagos Spaces helped me find the perfect home. Their service is top-notch!”</p>
            <p className="font-semibold">- Jane Doe</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-gray-600 mb-4">“Amazing platform with prime location listings. Highly recommended!”</p>
            <p className="font-semibold">- John Smith</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-gray-600 mb-4">“Affordable options that match my budget. Very pleased with the service!”</p>
            <p className="font-semibold">- Mary Johnson</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
