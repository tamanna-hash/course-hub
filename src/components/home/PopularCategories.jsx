"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FiCode, 
  FiCpu, 
  FiPenTool, 
  FiTrendingUp, 
  FiSmartphone, 
  FiShield, 
  FiBarChart, 
  FiBriefcase,
  FiArrowRight,
  FiUsers
} from "react-icons/fi";
import Link from "next/link";

const PopularCategories = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const categories = [
    {
      title: "Web Development",
      description: "HTML, CSS, JavaScript, React, Next.js, Node.js",
      icon: FiCode,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      students: "15K+",
      courses: 120,
    },
    {
      title: "AI & Machine Learning",
      description: "Python, Data Science, Deep Learning, Neural Networks",
      icon: FiCpu,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
      students: "12K+",
      courses: 85,
    },
    {
      title: "Design",
      description: "UI/UX, Figma, Wireframing, Prototyping, Visual Design",
      icon: FiPenTool,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
      iconColor: "text-orange-600 dark:text-orange-400",
      students: "8K+",
      courses: 95,
    },
    {
      title: "Marketing",
      description: "SEO, Social Media, Email Marketing, Growth Hacking",
      icon: FiTrendingUp,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
      iconColor: "text-green-600 dark:text-green-400",
      students: "10K+",
      courses: 75,
    },
    {
      title: "Mobile Development",
      description: "Flutter, React Native, iOS & Android Apps",
      icon: FiSmartphone,
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      students: "7K+",
      courses: 60,
    },
    {
      title: "Cybersecurity",
      description: "Network Security, Ethical Hacking, Threat Prevention",
      icon: FiShield,
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20",
      iconColor: "text-red-600 dark:text-red-400",
      students: "5K+",
      courses: 45,
    },
    {
      title: "Data Science",
      description: "Python, Pandas, Visualization, Analytics, ML",
      icon: FiBarChart,
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20",
      iconColor: "text-teal-600 dark:text-teal-400",
      students: "9K+",
      courses: 70,
    },
    {
      title: "Business & Analytics",
      description: "Excel, Power BI, Reporting, Dashboard Creation",
      icon: FiBriefcase,
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20",
      iconColor: "text-yellow-600 dark:text-yellow-500",
      students: "6K+",
      courses: 55,
    },
  ];

  return (
    <section className="py-20 bg-base-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl"
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
            Explore by{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Category
            </span>
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover courses tailored to your interests and career goals
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group cursor-pointer"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={`relative bg-gradient-to-br ${category.bgGradient} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 backdrop-blur-sm overflow-hidden h-full`}
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                />

                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 ${category.iconColor} relative`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className={`w-full h-full bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                    animate={{
                      boxShadow: [
                        "0 4px 6px rgba(0,0,0,0.1)",
                        "0 8px 25px rgba(0,0,0,0.15)",
                        "0 4px 6px rgba(0,0,0,0.1)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.h3
                    className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {category.title}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>

                  {/* Stats */}
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <FiUsers className="w-3 h-3" />
                      <span>{category.students} students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>{category.courses} courses</span>
                    </div>
                  </div>
                </div>

                {/* Hover Arrow */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FiArrowRight className={`w-5 h-5 ${category.iconColor}`} />
                </motion.div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
            <Link href={"/courses"}>View All Categories</Link>
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

export default PopularCategories;
