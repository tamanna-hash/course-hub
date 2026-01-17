"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FiStar, 
  FiBookOpen,
  FiArrowRight,
  FiAward
} from "react-icons/fi";
import Link from "next/link";

const Featured = ({ featuredCourses = [] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const gradients = [
    { gradient: "from-blue-500 to-cyan-500", bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20" },
    { gradient: "from-purple-500 to-pink-500", bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20" },
    { gradient: "from-orange-500 to-red-500", bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20" },
    { gradient: "from-green-500 to-emerald-500", bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20" }
  ];

  const coursesWithGradients = featuredCourses.map((course, index) => ({
    ...course,
    ...gradients[index % gradients.length]
  }));

  return (
    <section className="py-20 relative bg-base-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-indigo-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-6 md:px-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-base-content/90 dark:text-white mb-4"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Courses
            </span>
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our most popular and highly-rated courses chosen by thousands of students
          </p>
        </motion.div>

        {/* Featured Courses Grid */}
        {coursesWithGradients.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {coursesWithGradients.slice(0, 3).map((course, index) => (
              <motion.div
                key={course._id}
                variants={itemVariants}
                className="group cursor-pointer"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`relative bg-gradient-to-br ${course.bgGradient} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 backdrop-blur-sm overflow-hidden flex flex-col h-full`}
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  }}
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  />

                  {/* Course Image - Reduced Height */}
                  <div className="relative overflow-hidden rounded-t-2xl">
                    {course.image ? (
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className={`w-full h-32 bg-gradient-to-br ${course.gradient} flex items-center justify-center`}>
                        <FiBookOpen className="w-12 h-12 text-white opacity-80" />
                      </div>
                    )}

                    {/* Featured Badge */}
                    <motion.div
                      className="absolute top-3 left-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                    >
                      <FiAward className="w-3 h-3" />
                      Featured
                    </motion.div>

                    {/* Rating Badge */}
                    {course.rating && (
                      <motion.div
                        className="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 rounded-full px-2 py-1 shadow-lg flex items-center gap-1"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        }}
                      >
                        <FiStar className="w-3 h-3 text-yellow-500 fill-current" />
                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                          {course.rating}
                        </span>
                      </motion.div>
                    )}
                  </div>

                  {/* Course Content - Reduced Padding */}
                  <div className="p-4 relative z-10 flex flex-col flex-grow">
                    {/* Category */}
                    {course.category && (
                      <span className={`inline-block px-2 py-1 bg-gradient-to-r ${course.gradient} text-white text-xs rounded-full font-medium mb-2 self-start`}>
                        {course.category}
                      </span>
                    )}

                    {/* Title */}
                    <motion.h3
                      className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {course.title || "Course Title"}
                    </motion.h3>

                    {/* Description - Limited to 2 lines */}
                    {course.description && (
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2 flex-grow">
                        {course.description}
                      </p>
                    )}

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-3">
                      {course.discountPrice && course.discountPrice !== course.price && (
                        <span className="text-sm text-gray-400 line-through">
                          ${course.price}
                        </span>
                      )}
                      <span className="text-xl font-bold text-gray-900 dark:text-white">
                        {course.discountPrice ? `$${course.discountPrice}` : course.price ? `$${course.price}` : 'Free'}
                      </span>
                    </div>

                    {/* Enroll Button - At the bottom */}
                    <motion.a
                      href={`/courses/${course.slug || course._id}`}
                      className={`w-full px-4 py-2 bg-gradient-to-r ${course.gradient} text-white rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mt-auto`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Enroll Now</span>
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FiArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.a>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            variants={itemVariants}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No featured courses available at the moment.
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 4px 6px rgba(0,0,0,0.1)",
                "0 8px 25px rgba(99, 102, 241, 0.3)",
                "0 4px 6px rgba(0,0,0,0.1)",
              ],
            }}
            transition={{
              boxShadow: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <FiBookOpen className="w-5 h-5" />
            <Link href={"/courses"}>View All Courses</Link>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Featured;
