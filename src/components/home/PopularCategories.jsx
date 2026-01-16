import React from "react";

const PopularCategories = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Explore by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-2">Web Development</h3>
            <p className="text-gray-600 text-sm">
              HTML, CSS, JavaScript, React, Next.js, Node.js
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-2">
              AI & Machine Learning
            </h3>
            <p className="text-gray-600 text-sm">
              Python, Data Science, Deep Learning, Neural Networks
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-2">Design</h3>
            <p className="text-gray-600 text-sm">
              UI/UX, Figma, Wireframing, Prototyping, Visual Design
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-2">Marketing</h3>
            <p className="text-gray-600 text-sm">
              SEO, Social Media, Email Marketing, Growth Hacking
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-2">Mobile Development</h3>
            <p className="text-gray-600 text-sm">
              Flutter, React Native, iOS & Android Apps
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-2">Cybersecurity</h3>
            <p className="text-gray-600 text-sm">
              Network Security, Ethical Hacking, Threat Prevention
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-2">Data Science</h3>
            <p className="text-gray-600 text-sm">
              Python, Pandas, Visualization, Analytics, ML
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-2">Business & Analytics</h3>
            <p className="text-gray-600 text-sm">
              Excel, Power BI, Reporting, Dashboard Creation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
