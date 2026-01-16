import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">1. Choose a Course</h3>
            <p className="text-gray-600">
              Browse our catalog and pick a course that suits your goals.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">2. Learn Online</h3>
            <p className="text-gray-600">
              Watch video lessons, complete assignments, and track progress.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">3. Get Certified</h3>
            <p className="text-gray-600">
              Complete the course and receive a certificate for your
              achievement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
