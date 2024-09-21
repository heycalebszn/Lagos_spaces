// Careers.tsx
import React from 'react';

const Careers = () => {
  const jobs = [
    {
      id: 1,
      title: 'Full Stack Developer',
      description: 'Join our team as a Full Stack Developer to build scalable real estate solutions.',
      location: 'Remote',
      type: 'Full-Time',
    },
    {
      id: 2,
      title: 'Sales Manager',
      description: 'We are looking for a Sales Manager to lead our sales team and grow our client base.',
      location: 'Lagos, Nigeria',
      type: 'Full-Time',
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      description: 'Help us design beautiful, user-friendly interfaces as a UX/UI Designer.',
      location: 'Remote',
      type: 'Contract',
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Careers</h1>
        <p className="text-lg text-gray-600 mb-10 text-center">
          We’re always looking for talented and passionate individuals to join our team. Below are our current open positions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div key={job.id} className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">{job.title}</h3>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <p className="text-gray-500">
                <span className="font-semibold">Location:</span> {job.location}
              </p>
              <p className="text-gray-500">
                <span className="font-semibold">Type:</span> {job.type}
              </p>
              <a
                href="#apply"
                className="block mt-4 text-blue-600 hover:underline font-semibold"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
