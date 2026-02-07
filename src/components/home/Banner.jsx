"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Banner() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://i.ibb.co.com/d4pXjsS9/download-1.jpg" 
          alt="Banner Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/75"></div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/3 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 pt-28"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto">
          {/* Category Pills */}
          <motion.div 
            className="flex flex-wrap gap-2 mb-6 justify-center"
            variants={itemVariants}
          >
            {["Web Development", "AI & ML", "Design", "Business", "Marketing"].map((category, i) => (
              <motion.button
                key={i}
                className="px-4 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Main Heading */}
          <motion.div className="text-center mb-5" variants={itemVariants}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
              Experience Elevated Learning With{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                CourseHub
              </span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
              Discover courses that fit your lifestyle and boost your career to new heights
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-8"
            variants={itemVariants}
          >
            {[
              { number: "10K+", label: "Students" },
              { number: "500+", label: "Courses" },
              { number: "50+", label: "Instructors" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="text-xl sm:text-2xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-white/70 text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/courses"
                className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm font-semibold rounded-full shadow-lg transition-all duration-300"
              >
                Browse Courses
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/register"
                className="px-6 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/20 transition-all duration-300"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
