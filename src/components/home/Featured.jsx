import React from "react";

const Featured = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Course Card */}
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
              className="rounded mb-4"
            />
            <h3 className="font-semibold text-xl mb-2">
              Full Stack Web Development
            </h3>
            <p className="text-gray-600 mb-2">
              Build modern web applications using MERN stack.
            </p>
            <span className="text-sky-400 font-bold">$49.99</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
