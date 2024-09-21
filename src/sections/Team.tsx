import React from 'react';
import { Profile1, Profile2, Profile3 } from "../assets";

const Team = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src={Profile1} alt="Team Member 1" className="rounded-full w-32 h-32 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src={Profile2} alt="Team Member 2" className="rounded-full w-32 h-32 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">Jane Smith</h3>
            <p className="text-gray-600">Head of Sales</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src={Profile3} alt="Team Member 3" className="rounded-full w-32 h-32 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">Robert Johnson</h3>
            <p className="text-gray-600">Marketing Lead</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
