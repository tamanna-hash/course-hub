import React from "react";

const NewsLetter = () => {
  return (
    <section className="py-20 bg-sky-400 text-white">
      <div className="container mx-auto px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
        <p className="mb-6">
          Subscribe to our newsletter and never miss a course update.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded w-full sm:w-auto flex-1 text-gray-900"
          />
          <button className="btn btn-primary px-6 py-3 rounded">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
