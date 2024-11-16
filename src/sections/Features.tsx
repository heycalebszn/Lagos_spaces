import React from 'react';
import { Home, MapPin, DollarSign, Shield } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 - Verified Listings */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium">Verified Listings</h3>
              <p className="mt-2 text-gray-600">All accommodations are thoroughly verified for your safety.</p>
            </div>
            {/* Feature 2 - Best Prices */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium">Best Prices</h3>
              <p className="mt-2 text-gray-600">Find the most competitive prices on accommodations.</p>
            </div>
            {/* Feature 3 - Prime Locations */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium">Prime Locations</h3>
              <p className="mt-2 text-gray-600">Easily find accommodations in prime locations across Lagos.</p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Features;
