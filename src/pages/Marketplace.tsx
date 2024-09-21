import React from 'react';
import { Shield, DollarSign, MapPin } from 'lucide-react';
import { Link } from "react-router-dom";
import { House1, House2, House3, House4, House5 } from "../assets";

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-96 flex items-center justify-center" 
               style={{ backgroundImage: 'url(/assets/house1.jpg)' }}>
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to Lagos-Spaces Marketplace</h1>
          <p className="text-lg mb-6">Find or List Accommodations in Lagos</p>
          <div className="space-x-4">
            <Link to={"/listing"}>
            <button className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700">
              Find Accommodations
            </button>
            </Link>
            <button className="bg-green-600 px-4 py-2 rounded text-white hover:bg-green-700">
              List Accommodations
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Lagos-Spaces?</h2>
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

      {/* Featured Listings */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Featured Accommodations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Listing 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={House1} alt="Accommodation" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Luxury Apartment in Victoria Island</h3>
                <p className="text-gray-600">₦200,000/month</p>
              </div>
            </div>
            {/* Example Listing 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={House2} alt="Accommodation" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Spacious Flat in Lekki Phase 1</h3>
                <p className="text-gray-600">₦150,000/month</p>
              </div>
            </div>
            {/* Example Listing 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={House3} alt="Accommodation" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Modern Studio in Yaba</h3>
                <p className="text-gray-600">₦100,000/month</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>© 2024 Lagos-Spaces. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Marketplace;
