import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Lagos Spaces. All Rights Reserved.</p>
        <ul className="flex justify-center space-x-6 mt-4">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
          <li><a href="#careers" className="hover:underline">Careers</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
