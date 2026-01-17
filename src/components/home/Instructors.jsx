"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FiStar, 
  FiUsers, 
  FiBookOpen, 
  FiAward,
  FiLinkedin,
  FiTwitter,
  FiGithub,
  FiArrowRight
} from "react-icons/fi";

const Instructors = ({ instructorsData = [] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
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

  // Assign gradient colors to instructors
  const gradients = [
    { gradient: "from-blue-500 to-cyan-500", bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20" },
    { gradient: "from-purple-500 to-pink-500", bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20" },
    { gradient: "from-orange-500 to-red-500", bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20" },
    { gradient: "from-green-500 to-emerald-500", bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20" },
    { gradient: "from-red-500 to-pink-500", bgGradient: "from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20" },
    { gradient: "from-indigo-500 to-blue-500", bgGradient: "from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20" },
    { gradient: "from-teal-500 to-cyan-500", bgGradient: "from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20" },
    { gradient: "from-yellow-500 to-orange-500", bgGradient: "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20" }
  ];

  const instructors = instructorsData.map((instructor, index) => ({
    ...instructor,
    ...gradients[index % gradients.length]
  }));

  return (
    <section className="py-20 bg-base-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-32 left-20 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-6 md:px-20 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-base-content/90 dark:text-white mb-4"
          >
            Meet Our{" "}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Expert Instructors
            </span>
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Learn from industry professionals who are passionate about sharing their knowledge
          </p>
        </motion.div>

        {/* Instructors Grid */}
        {instructors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.id}
                variants={itemVariants}
                className="group cursor-pointer"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`relative bg-gradient-to-br ${instructor.bgGradient} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 backdrop-blur-sm overflow-hidden h-full`}
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  }}
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${instructor.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  />

                  {/* Profile Image */}
                  <motion.div
                    className="relative mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className={`w-20 h-20 mx-auto rounded-full p-1 bg-gradient-to-br ${instructor.gradient}`}
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                    >
                      {instructor.image ? (
                        <img
                          src={instructor.image}
                          alt={instructor.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                          <span className="text-gray-600 dark:text-gray-300 text-lg font-bold">
                            {instructor.name?.charAt(0) || '?'}
                          </span>
                        </div>
                      )}
                    </motion.div>
                    
                    {/* Rating Badge */}
                    {instructor.rating && (
                      <motion.div
                        className="absolute -top-1 -right-1 bg-white dark:bg-gray-800 rounded-full px-2 py-1 shadow-lg flex items-center gap-1"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                      >
                        <FiStar className="w-3 h-3 text-yellow-500 fill-current" />
                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                          {instructor.rating}
                        </span>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <motion.h3
                      className="text-xl font-bold text-gray-900 dark:text-white mb-1"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {instructor.name || "Unknown Instructor"}
                    </motion.h3>
                    
                    {instructor.title && (
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                        {instructor.title}
                      </p>
                    )}
                    
                    {instructor.company && (
                      <p className="text-gray-500 dark:text-gray-400 text-xs mb-3 font-medium">
                        @ {instructor.company}
                      </p>
                    )}

                    {/* Specialties */}
                    {instructor.specialties && instructor.specialties.length > 0 && (
                      <div className="flex flex-wrap justify-center gap-1 mb-4">
                        {instructor.specialties.slice(0, 2).map((specialty, idx) => (
                          <span
                            key={idx}
                            className={`px-2 py-1 bg-gradient-to-r ${instructor.gradient} text-white text-xs rounded-full font-medium`}
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <FiUsers className="w-3 h-3 text-gray-500" />
                          <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                            {instructor.totalStudents > 1000 ? `${Math.floor(instructor.totalStudents/1000)}K+` : instructor.totalStudents || 0}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">Students</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <FiBookOpen className="w-3 h-3 text-gray-500" />
                          <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                            {instructor.courseCount || 0}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">Courses</span>
                      </div>
                    </div>

                    {/* Bio */}
                    {instructor.bio && (
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        {instructor.bio}
                      </p>
                    )}

                    {/* Social Links */}
                    {instructor.social && (
                      <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {instructor.social.linkedin && (
                          <motion.a
                            href={instructor.social.linkedin}
                            className="text-gray-400 hover:text-blue-600 transition-colors"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FiLinkedin className="w-4 h-4" />
                          </motion.a>
                        )}
                        {instructor.social.twitter && (
                          <motion.a
                            href={instructor.social.twitter}
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                            whileHover={{ scale: 1.2, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FiTwitter className="w-4 h-4" />
                          </motion.a>
                        )}
                        {instructor.social.github && (
                          <motion.a
                            href={instructor.social.github}
                            className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FiGithub className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                    )}
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
              No instructors found. Please add instructor data to your courses.
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 4px 6px rgba(0,0,0,0.1)",
                "0 8px 25px rgba(147, 51, 234, 0.3)",
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
            <FiAward className="w-5 h-5" />
            <span>Become an Instructor</span>
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

export default Instructors;
