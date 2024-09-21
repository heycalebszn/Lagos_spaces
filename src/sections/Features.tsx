import React from 'react';
import { Home, MapPin, DollarSign } from 'lucide-react';

const Features = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 border rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <Home className="text-blue-600" size={40} />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Wide Selection</h3>
            <p className="text-gray-600">Choose from hundreds of homes, apartments, and offices available for rent or sale.</p>
          </div>
          {/* Feature 2 */}
          <div className="p-6 border rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <MapPin className="text-blue-600" size={40} />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Prime Locations</h3>
            <p className="text-gray-600">Find properties in the best areas with easy access to schools, businesses, and more.</p>
          </div>
          {/* Feature 3 */}
          <div className="p-6 border rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <DollarSign className="text-blue-600" size={40} />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Affordable Prices</h3>
            <p className="text-gray-600">Get the best value for your money with competitive pricing and flexible options.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
