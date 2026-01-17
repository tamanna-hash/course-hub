"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiSearch, FiPlay, FiAward, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const HowItWorks = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const steps = [
    {
      id: 1,
      icon: FiSearch,
      title: "Choose a Course",
      description: "Browse our extensive catalog and pick a course that perfectly aligns with your career goals and interests.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      id: 2,
      icon: FiPlay,
      title: "Learn Online",
      description: "Watch engaging video lessons, complete hands-on assignments, and track your progress in real-time.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      id: 3,
      icon: FiAward,
      title: "Get Certified",
      description: "Complete the course successfully and receive an industry-recognized certificate for your achievement.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      iconColor: "text-green-600 dark:text-green-400",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-base-100 relative overflow-hidden">
      {/* Background Pattern - Responsive */}
      <div className="absolute inset-0 opacity-5">
        <svg width="40" height="40" viewBox="0 0 60 60" className="absolute top-6 left-4 sm:top-10 sm:left-10 sm:w-[60px] sm:h-[60px]">
          <circle cx="30" cy="30" r="2" fill="currentColor" />
        </svg>
        <svg width="40" height="40" viewBox="0 0 60 60" className="absolute top-20 right-8 sm:top-32 sm:right-20 sm:w-[60px] sm:h-[60px]">
          <circle cx="30" cy="30" r="2" fill="currentColor" />
        </svg>
        <svg width="40" height="40" viewBox="0 0 60 60" className="absolute bottom-12 left-16 sm:bottom-20 sm:left-32 sm:w-[60px] sm:h-[60px]">
          <circle cx="30" cy="30" r="2" fill="currentColor" />
        </svg>
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-8 sm:mb-12 md:mb-16">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-base-content/90 dark:text-white mb-3 sm:mb-4 md:mb-6 px-2"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            How It <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Works</span>
          </motion.h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-4 leading-relaxed">
            Start your learning journey in just three simple steps
          </p>
        </motion.div>

        {/* Steps Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 relative px-2 sm:px-4 md:px-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="relative group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Connection Line (Large screens only) */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-14 sm:top-16 md:top-18 lg:top-20 left-full w-4 sm:w-6 md:w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 z-0"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                >
                  <motion.div
                    className="absolute right-0 top-1/2 transform -translate-y-1/2"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FiArrowRight className="text-gray-400 dark:text-gray-500 w-3 h-3 sm:w-4 sm:h-4" />
                  </motion.div>
                </motion.div>
              )}

              {/* Mobile Connection Line (Vertical) */}
              {index < steps.length - 1 && (
                <motion.div
                  className="block md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-0.5 h-4 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 z-0"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                >
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1"
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FiArrowRight className="text-gray-400 dark:text-gray-500 w-3 h-3 rotate-90" />
                  </motion.div>
                </motion.div>
              )}

              {/* Step Card - Responsive */}
              <motion.div
                className={`relative ${step.bgColor} p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 backdrop-blur-sm overflow-hidden group-hover:border-opacity-100 min-h-[280px] sm:min-h-[320px] md:min-h-[350px]`}
                whileHover={{ scale: 1.02 }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Step Number - Responsive */}
                <motion.div
                  className={`absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg`}
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
                  {step.id}
                </motion.div>

                {/* Icon - Responsive */}
                <motion.div
                  className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 ${step.iconColor} relative`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className={`w-full h-full bg-gradient-to-br ${step.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg`}
                    animate={{
                      boxShadow: [
                        "0 4px 6px rgba(0,0,0,0.1)",
                        "0 8px 25px rgba(0,0,0,0.15)",
                        "0 4px 6px rgba(0,0,0,0.1)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  >
                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                  </motion.div>
                </motion.div>

                {/* Content - Responsive */}
                <div className="relative z-10">
                  <motion.h3
                    className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.title}
                  </motion.h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed px-2 sm:px-0">
                    {step.description}
                  </p>
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

        {/* Call to Action - Responsive */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-12 md:mt-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 4px 6px rgba(0,0,0,0.1)",
                "0 8px 25px rgba(59, 130, 246, 0.3)",
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
            <Link href={"/courses"}>Start Learning Today</Link>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
