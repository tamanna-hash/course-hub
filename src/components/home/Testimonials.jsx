import React from "react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <p className="text-gray-600 mb-4">
              "CourseHub helped me land my dream job in web development!"
            </p>
            <h3 className="font-semibold">Rafiq Islam</h3>
            <span className="text-gray-400 text-sm">Frontend Developer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
