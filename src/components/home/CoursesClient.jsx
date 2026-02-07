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
    <div className="min-h-screen bg-base-200 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      {/* Enhanced Header Section */}
      <motion.div
        className="relative bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 py-20 pt-28 px-6 md:px-20 text-center overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/3 rounded-full blur-3xl"></div>
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 bg-blue-200/10 rounded-full blur-3xl"
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
            className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/10 rounded-full blur-3xl"
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
        <motion.div variants={itemVariants} className="relative z-10 mb-8">
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/20"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FiBookOpen className="w-5 h-5 text-white" />
            <span className="text-sm font-medium text-white">All Courses</span>
          </motion.div>

          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight"
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
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Courses
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
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
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiBookOpen className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-white">
              <strong>{courses.length}</strong> Courses Available
            </span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <FiUsers className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-white">
              <strong>50K+</strong> Students Enrolled
            </span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <FiTrendingUp className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-white">
              <strong>95%</strong> Success Rate
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