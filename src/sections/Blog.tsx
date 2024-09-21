import React from 'react';

const Blog = () => {
  const posts = [
    { id: 1, title: 'Top 5 Tips for Buying Your First Home', excerpt: 'Buying a home can be overwhelming. Here are five tips to get started...' },
    { id: 2, title: 'How to Rent Office Space for Startups', excerpt: 'Startups need office space that fits their unique needs. Here’s what to look for...' },
    { id: 3, title: 'Real Estate Trends in 2024', excerpt: 'The real estate market is constantly evolving. Here’s what to expect in 2024...' },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">{post.title}</h3>
              <p className="text-gray-600">{post.excerpt}</p>
              <a href="#" className="text-blue-600 font-semibold hover:underline">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
