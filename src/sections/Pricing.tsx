import React from 'react';

const Pricing = () => {
  const plans = [
    { id: 1, title: 'Basic Plan', price: '$0', features: ['Free property listing', 'Access to all features'] },
    { id: 2, title: 'Premium Plan', price: '$49/month', features: ['Featured listing', 'Priority support', 'Increased visibility'] },
    { id: 3, title: 'Enterprise Plan', price: '$500/month', features: ['Tailored features', 'Custom support', 'Bulk property listings'] },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.id} className="p-6 border rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">{plan.title}</h3>
              <p className="text-4xl font-bold text-gray-800 mb-4">{plan.price}</p>
              <ul className="text-gray-600 mb-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="mb-2">{feature}</li>
                ))}
              </ul>
              <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
