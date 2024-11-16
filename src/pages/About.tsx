// About.tsx
import React from 'react';
import { Profile1, Profile3 } from "../assets";
import Careers from './Careers';
import Contact from './Contact';

const About = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          At Lagos Spaces, we aim to connect people with their dream homes and office spaces. Our mission is to simplify the real estate process, 
          making it easy and affordable for everyone to find their perfect space.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading platform for real estate solutions, helping people and businesses find the perfect space to live, work, and grow.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              We are dedicated to offering a user-friendly platform with verified listings, making the search for properties seamless and efficient.
            </p>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src={Profile1} alt="Team Member 1" className="rounded-full w-32 h-32 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src={Profile3} alt="Team Member 2" className="rounded-full w-32 h-32 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700">Jane Smith</h3>
            <p className="text-gray-600">Head of Operations</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src={Profile1} alt="Team Member 3" className="rounded-full w-32 h-32 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700">Michael Lee</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
