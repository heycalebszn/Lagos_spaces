import React from 'react';
import { House1, House2, House3, House4, House5 } from "../assets";

const Portfolio = () => {
  const properties = [
    { id: 1, image: House1, title: 'Luxury Apartment' },
    { id: 2, image: House2, title: 'Office/Business Spaces' },
    { id: 3, image: House3, title: 'Suburban House' },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Explore Our Available Spaces</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="p-6 border rounded-lg shadow-lg">
              <img src={property.image} alt={property.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">{property.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
