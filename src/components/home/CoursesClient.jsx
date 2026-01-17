"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiBookOpen, FiTrendingUp, FiUsers } from "react-icons/fi";
import CourseCard from "../cards/CourseCard";

const CoursesClient = ({ courses }) => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      {/* Enhanced Header Section */}
      <motion.div
        className="relative py-12 px-6 md:px-20 text-center overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"
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
            className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl"
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

        {/* Title Section */}
        <motion.div variants={itemVariants} className="relative mt-4 z-10 mb-8">
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-100/50 dark:bg-blue-900/30 backdrop-blur-sm rounded-full px-4 py-2 mb-4"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FiBookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">All Courses</span>
          </motion.div>

          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-base-content/90 dark:text-white mb-3 leading-tight"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Discover Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Courses
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Explore our comprehensive collection of courses designed to help you master new skills and advance your career
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8 relative z-10"
        >
          <motion.div
            className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiBookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <span className="text-gray-700 dark:text-gray-300">
              <strong className="text-blue-600 dark:text-blue-400">{courses.length}</strong> Courses Available
            </span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <FiUsers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </motion.div>
            <span className="text-gray-700 dark:text-gray-300">
              <strong className="text-purple-600 dark:text-purple-400">50K+</strong> Students Enrolled
            </span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <FiTrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
            </motion.div>
            <span className="text-gray-700 dark:text-gray-300">
              <strong className="text-green-600 dark:text-green-400">95%</strong> Success Rate
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Courses Grid */}
      <motion.div
        className="px-6 md:px-20 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={itemVariants}
        >
          {courses.map((course, index) => (
            <motion.div
              key={course._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CoursesClient;