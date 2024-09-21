// Contact.tsx
import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>
        <p className="text-center text-lg text-gray-600 mb-10">
          Have a question or need assistance? We're here to help. Reach out to us using the form below or contact us directly.
        </p>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Your Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows={6}
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">Or contact us directly at:</p>
          <p className="text-lg font-semibold text-gray-700">info@lagosspaces.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
