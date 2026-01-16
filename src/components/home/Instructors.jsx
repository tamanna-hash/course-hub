import React from "react";

const Instructors = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Meet Our Instructors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h3 className="font-semibold mb-1">Sarah Ahmed</h3>
            <p className="text-gray-500 text-sm">Full Stack Engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
