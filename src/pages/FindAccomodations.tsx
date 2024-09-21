import React from 'react';
import { House1, House2, House3, House4, House5 } from "../assets";

const accommodations = [
  {
    id: 1,
    title: 'Cozy Apartment in Lagos',
    price: '$500 / month',
    image: House1,
  },
  {
    id: 2,
    title: 'Modern House in Ikeja',
    price: '$1,200 / month',
    image: House2,
  },
  {
    id: 3,
    title: 'Modern House in Ikeja',
    price: '$1,200 / month',
    image: House3,
  },
  {
    id: 4,
    title: 'Modern House in Ikeja',
    price: '$1,200 / month',
    image: House4,
  },
  {
    id: 5,
    title: 'Modern House in Ikeja',
    price: '$1,200 / month',
    image: House5,
  },
  // Add more listings here...
];

const FindAccomodations = () => {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Available Spaces</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {accommodations.map((accommodation) => (
          <div key={accommodation.id} className="bg-white p-4 shadow-lg rounded-lg">
            <img src={accommodation.image} alt={accommodation.title} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              {accommodation.title}
            </h3>
            <p className="text-gray-600 mt-2">{accommodation.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FindAccomodations;
